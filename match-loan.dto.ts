import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class MatchLoanDto {
  @IsString()
  @IsNotEmpty()
  borrowerId: string;

  @IsString()
  @IsNotEmpty()
  lenderId: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
