import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import JwtGuard from './Common/Guards/jwt.guard';

@Controller()
@UseGuards(JwtGuard)
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}