import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleModel } from '../../Common/Database/Models/role.model';

@Module({
  imports: [TypeOrmModule.forFeature([
    RoleModel
  ])],
  providers: [RoleService],
  controllers: [RoleController]
})
export class RoleModule {}
