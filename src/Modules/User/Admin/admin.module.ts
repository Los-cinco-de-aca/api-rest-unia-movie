import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { UserService } from '../user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from '../../../Common/Database/Models/user.model';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
  providers: [UserService],
  controllers: [AdminController],
})
export class AdminModule {
}
