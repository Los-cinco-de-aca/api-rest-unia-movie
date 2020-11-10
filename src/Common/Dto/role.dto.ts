import { IRole } from '../Interfaces/role.interface';
import { IsNotEmpty, Length } from 'class-validator';


export class RoleDto implements IRole {
  @IsNotEmpty()
  @Length(5, 20)
  typeRole: string;
}