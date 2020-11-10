import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './Common/Database/database.module';
import { UserModule } from './Modules/User/user.module';
import { RoleModule } from './Modules/Role/role.module';
import { AuthModule } from './Modules/Auth/auth.module';
import { EmailModule } from './Modules/Email/email.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, UserModule, RoleModule, AuthModule, EmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
