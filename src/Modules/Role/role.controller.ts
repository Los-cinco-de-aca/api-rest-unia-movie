import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import JwtGuard from '../../Common/Guards/jwt.guard';
import { RoleDto } from '../../Common/DTO/role.dto';
import { Response } from 'express';
import { RoleService } from './role.service';

@Controller('Role')
@UseGuards(JwtGuard)
export class RoleController {

  constructor(private roleService: RoleService) {
  }

  @Post('Roles')
  async createRole(@Body() role: RoleDto, @Res() response: Response) {
    return response.json(await this.roleService.createRole(role));
  }

  @Get('Roles')
  async viewRoles(@Res() response: Response) {
    return response.json(await this.roleService.viewRole());
  }

}
