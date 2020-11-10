import { Module } from '@nestjs/common';
import { AdminModule } from './Admin/admin.module';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from '../../Common/Database/Models/user.model';

@Module({
  imports: [AdminModule, TypeOrmModule.forFeature([
    UserModel
  ])],
  providers: [UserService]
})
export class UserModule {}
