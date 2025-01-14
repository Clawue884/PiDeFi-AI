import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PortfolioService {
  private assets = [
    { name: 'Pi Coin', allocation: 50 },
    { name: 'Bitcoin', allocation: 30 },
    { name: 'Ethereum', allocation: 20 },
  ];

  async getRealTimeAssets() {
    const response = await axios.get('https://api.example.com/assets-prices');
    return response.data;
  }

  async autoRebalance(portfolioData: any) {
    // Example: Rebalance based on target allocation
    const updatedPortfolio = this.assets.map(asset => {
      const targetAllocation = portfolioData.target[asset.name] || asset.allocation;
      return { ...asset, allocation: targetAllocation };
    });
    return { updatedPortfolio };
  }

  async getRiskReport() {
    const riskData = this.assets.map(asset => ({
      name: asset.name,
      risk: Math.random() * 10, // Simulated risk score
    }));
    return { riskReport: riskData };
  }
}
