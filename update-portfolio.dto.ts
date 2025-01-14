import { IsNotEmpty, IsNumber, IsObject } from 'class-validator';

export class UpdatePortfolioDto {
  @IsObject()
  @IsNotEmpty()
  target: {
    [key: string]: number; // Nama aset sebagai kunci dan target alokasi sebagai nilai (dalam persentase)
  };

  @IsNumber()
  @IsNotEmpty()
  totalValue: number; // Total nilai portofolio dalam USD
}
