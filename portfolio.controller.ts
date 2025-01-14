import { Controller, Get, Post, Body } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get('assets')
  getRealTimeAssets() {
    return this.portfolioService.getRealTimeAssets();
  }

  @Post('rebalance')
  autoRebalance(@Body() updatePortfolioDto: UpdatePortfolioDto) {
    return this.portfolioService.autoRebalance(updatePortfolioDto);
  }

  @Get('risk-report')
  getRiskReport() {
    return this.portfolioService.getRiskReport();
  }
}
