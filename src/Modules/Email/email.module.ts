import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MailerModule.forRoot({
      transport: {
        host: process.env.SERVICE_MAIL,
        auth: {
          user: process.env.USERNAME_MAIL,
          pass: process.env.PASSWORD_MAIL,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
    }),
  ],
  providers: [EmailService],
})
export class EmailModule {
}
