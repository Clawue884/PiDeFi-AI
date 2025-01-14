import { Controller, Post, Body } from '@nestjs/common';
import { WalletService } from './wallet.service';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post('transfer')
  async transferPi(@Body() transferDto: any) {
    return this.walletService.transferPi(transferDto);
  }
}
