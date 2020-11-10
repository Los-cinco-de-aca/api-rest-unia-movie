import { IRole } from './role.interface';
import { ICompany } from './company.interface';

export interface IUser {
  nameUser: string;
  emailUser: string;
  passwordUser: string;
  role: IRole;
  phoneUser: string;
  stateUser: boolean;
  company?: ICompany;
}