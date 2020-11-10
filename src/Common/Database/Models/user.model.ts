import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from '../../Interfaces/user.interface';
import { ICompany } from '../../Interfaces/company.interface';
import { IRole } from '../../Interfaces/role.interface';
import { RoleModel } from './role.model';

@Entity({name: 'user'})
export class UserModel extends BaseEntity implements IUser {

  @PrimaryGeneratedColumn({ name: 'pk_user' })
  idUser: number;

  @Column('varchar', { nullable: false, length: 60 })
  emailUser: string;

  @Column('varchar', { nullable: false, length: 90 })
  nameUser: string;

  @Column('varchar', { nullable: false, length: 80 })
  passwordUser: string;

  @Column('varchar', { nullable: false, length: 15 })
  phoneUser: string;

  @ManyToOne((type => RoleModel), (role: RoleModel) => role.user)
  @JoinColumn({ name: 'fk_role' })
  role: IRole;

  @Column('boolean', { nullable: false })
  stateUser: boolean;

  @Column('json', { nullable: true })
  company: ICompany;

}