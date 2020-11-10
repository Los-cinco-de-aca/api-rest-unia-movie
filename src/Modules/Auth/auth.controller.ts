import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthDto } from '../../Common/Dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('Auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {
  }

  @Post('Sign')
  async signIn(@Body() authDto: AuthDto, @Res() response: Response) {
    return response.json(await this.authService.signIn(authDto));
  }

  @Post('RecoveryPassword')
  async recoveryPassword(@Body() emailUser: string, @Res() response: Response) {
    return response.json(await this.authService.recoveryPassword(emailUser));
  }

}
