import { Injectable } from '@nestjs/common';
import { UserService } from '../User/user.service';
import { AuthDto } from '../../Common/Dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from '../Email/email.service';


@Injectable()
export class AuthService {


  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly emailService: EmailService) {
  }


  /**
   * Sign in
   * @param authDto
   */
  async signIn(authDto: AuthDto): Promise<string | any> {
    try {
      const user = await this.userService.viewUser({ ...authDto });
      if (user !== 'No found users') {
        const token = this.jwtService.sign({ ...authDto }, { algorithm: 'HS512' });
        return { user, token };
      } else return user;
    } catch (e) {
      return 'Error internal: ' + e;
    }
  }

  /**
   * Recovery password
   * @param body
   */
  async recoveryPassword(body): Promise<string> {
    const { emailUser } = body;
    try {
      const user: any = await this.userService.viewUser({ emailUser });
      if (user !== 'No found user') {
        await this.emailService.sendMail(emailUser,
          'Recovery password',
          `your password is ${(user.passwordUser)}`,
        );
        return 'Email send';
      } else return user;
    } catch (e) {
      return 'Error internal: ' + e;
    }
  }

}
