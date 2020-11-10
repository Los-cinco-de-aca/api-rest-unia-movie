import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IRole } from '../../Interfaces/role.interface';
import { UserModel } from './user.model';


@Entity({name: 'role'})
export class RoleModel extends BaseEntity implements IRole {

  @PrimaryGeneratedColumn({ name: 'pk_role' })
  idRole: number;

  @Column('varchar', { nullable: false, length: 30 })
  typeRole: string;

  @OneToMany((type => UserModel), (user: UserModel) => user.role)
  user: Array<UserModel>;

}