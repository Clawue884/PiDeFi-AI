import { Controller, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('pi-login')
  async authenticatePi(@Query('userId') userId: string, @Query('authToken') authToken: string) {
    return this.authService.authenticatePi(userId, authToken);
  }
}
