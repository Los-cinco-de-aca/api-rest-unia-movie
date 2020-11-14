import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, ObjectID, ObjectIdColumn } from 'typeorm';
import { IUser } from '../../Interfaces/user.interface';
import { IRole } from '../../Interfaces/role.interface';
import { RoleModel } from './role.model';

@Entity({name: 'user'})
export class UserModel extends BaseEntity implements IUser {

  @ObjectIdColumn()
  id: ObjectID;

  @Column('string', { nullable: false, length: 60 })
  emailUser: string;

  @Column('string', { nullable: false, length: 90 })
  nameUser: string;

  @Column('string', { nullable: false, length: 80 })
  passwordUser: string;

  @Column('string', { nullable: false, length: 15 })
  phoneUser: string;

  @Column('boolean', { nullable: false })
  stateUser: boolean;

  @ManyToOne((type => RoleModel), (role: RoleModel) => role.user)
  @JoinColumn({ name: 'fk_role' })
  role: IRole;


}