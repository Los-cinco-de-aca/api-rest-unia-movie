import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {


  constructor(private mailService: MailerService) {
  }

  /**
   * @method Send Email
   */
  async sendMail(to: string, subject: string, text: string, attachments?: any): Promise<string> {
    try {
      await this.mailService.sendMail({
        to,
        from: process.env.USERNAME_MAIL,
        subject,
        text,
        attachments,
      });
      return Promise.resolve('Send Email correct');
    } catch (error) {
      console.log(error);
      return Promise.reject('Error send email');
    }
  }

}
