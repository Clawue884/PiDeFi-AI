import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AuthService {
  private readonly PI_API_URL = 'https://api.minepi.com/v2'; // Base API URL

  async authenticatePi(userId: string, authToken: string) {
    try {
      const response = await axios.get(`${this.PI_API_URL}/auth`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        params: { userId },
      });

      if (response.data && response.data.verified) {
        return { success: true, userId, message: 'Authentication successful' };
      }
      return { success: false, message: 'Authentication failed' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
