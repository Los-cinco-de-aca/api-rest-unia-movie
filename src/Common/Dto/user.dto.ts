import { IUser } from '../Interfaces/user.interface';
import { ICompany } from '../Interfaces/company.interface';
import { IRole } from '../Interfaces/role.interface';
import { IsBoolean, IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto implements IUser{

  @IsNotEmpty()
  @IsEmail()
  emailUser: string;

  @IsNotEmpty()
  nameUser: string;

  @IsNotEmpty()
  passwordUser: string;

  @IsNotEmpty()
  phoneUser: string;

  @IsNotEmpty()
  role: IRole;

  @IsNotEmpty()
  @IsBoolean()
  stateUser: boolean;

  company?: ICompany;
}