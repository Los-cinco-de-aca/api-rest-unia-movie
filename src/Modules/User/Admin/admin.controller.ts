import { Body, Controller, Get, Post, Put, Res, UseGuards } from '@nestjs/common';
import { UserService } from '../user.service';
import { UserDto } from '../../../Common/DTO/user.dto';
import { Response } from 'express';
import JwtGuard from '../../../Common/Guards/jwt.guard';

@Controller('Admin')
@UseGuards(JwtGuard)
export class AdminController {


  constructor(private readonly userService: UserService) {
  }

  @Post('Users')
  async createUser(@Body() user: UserDto, @Res() response: Response) {
    return response.json(await this.userService.createUser(user));
  }

  @Get('Users')
  async viewUsers(@Body() user: UserDto, @Res() response: Response) {
    return response.json(await this.userService.viewAllUser());
  }

  @Put('Users')
  async updateUsers(@Body() data: any, @Res() response: Response) {
    return response.json(await this.userService.updateUser(data.condition, data.setData));
  }

}
