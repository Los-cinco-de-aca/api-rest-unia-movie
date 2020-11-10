import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from '../../Common/Database/Models/user.model';
import { UserService } from '../User/user.service';
import { JwtModule } from '@nestjs/jwt';
import JwtStrategy from '../../Common/Strategy/jwt.strategy';
import { EmailService } from '../Email/email.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel]), JwtModule.register({
    secret: process.env.token,
    signOptions: { expiresIn: '7d' },
  })],
  providers: [AuthService, UserService, JwtStrategy, EmailService],
  controllers: [AuthController],
})
export class AuthModule {
}
