import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class LendingService {
  private loans = []; // Simulasi penyimpanan data pinjaman

  async createLoan(createLoanDto: any) {
    const newLoan = {
      id: Date.now(),
      ...createLoanDto,
      status: 'open',
      createdAt: new Date(),
    };
    this.loans.push(newLoan);
    return { message: 'Loan created successfully!', loan: newLoan };
  }

  async matchLoan(matchLoanDto: any) {
    const { borrowerId, lenderId, amount } = matchLoanDto;
    const loan = this.loans.find(
      (loan) => loan.borrowerId === borrowerId && loan.amount === amount && loan.status === 'open',
    );

    if (!loan) {
      return { message: 'No matching loan found!' };
    }

    loan.lenderId = lenderId;
    loan.status = 'matched';

    return { message: 'Loan matched successfully!', loan };
  }

  async repayLoan(repayLoanDto: any) {
    const { loanId, amountPaid } = repayLoanDto;
    const loan = this.loans.find((loan) => loan.id === loanId);

    if (!loan || loan.status !== 'matched') {
      return { message: 'Invalid loan or loan not matched!' };
    }

    loan.amountPaid = (loan.amountPaid || 0) + amountPaid;

    if (loan.amountPaid >= loan.amount) {
      loan.status = 'repaid';
      return { message: 'Loan fully repaid!', loan };
    }

    return { message: 'Partial repayment successful!', loan };
  }

  async getDynamicInterestRate() {
    // Ambil data pasar real-time
    const marketData = await axios.get('https://api.example.com/market-data');
    const interestRate = (marketData.data.volatility + 2) / 100; // Contoh kalkulasi
    return { interestRate: interestRate.toFixed(2) };
  }
}
