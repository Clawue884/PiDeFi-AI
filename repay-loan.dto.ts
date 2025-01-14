import { IsNotEmpty, IsNumber } from 'class-validator';

export class RepayLoanDto {
  @IsNumber()
  @IsNotEmpty()
  loanId: number;

  @IsNumber()
  @IsNotEmpty()
  amountPaid: number;
}
