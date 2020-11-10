import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class AuthDto {

  @IsEmail()
  @IsNotEmpty()
  @Length(10, 90)
  emailUser: string;


  @IsNotEmpty()
  @Length(10, 80)
  passwordUser: string;
}