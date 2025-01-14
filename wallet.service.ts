import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WalletService {
  private readonly PI_API_URL = 'https://api.minepi.com/v2';

  async transferPi(transferDto: any) {
    const { senderId, receiverId, amount, authToken } = transferDto;

    try {
      const response = await axios.post(
        `${this.PI_API_URL}/payments`,
        {
          senderId,
          receiverId,
          amount,
          currency: 'PI',
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      );

      return { success: true, transaction: response.data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
