import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { LendingService } from './lending.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { MatchLoanDto } from './dto/match-loan.dto';
import { RepayLoanDto } from './dto/repay-loan.dto';

@Controller('lending')
export class LendingController {
  constructor(private readonly lendingService: LendingService) {}

  @Post('create-loan')
  createLoan(@Body() createLoanDto: CreateLoanDto) {
    return this.lendingService.createLoan(createLoanDto);
  }

  @Post('match-loan')
  matchLoan(@Body() matchLoanDto: MatchLoanDto) {
    return this.lendingService.matchLoan(matchLoanDto);
  }

  @Post('repay-loan')
  repayLoan(@Body() repayLoanDto: RepayLoanDto) {
    return this.lendingService.repayLoan(repayLoanDto);
  }

  @Get('interest-rate')
  getDynamicInterestRate() {
    return this.lendingService.getDynamicInterestRate();
  }
}
