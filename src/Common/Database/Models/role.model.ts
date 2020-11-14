import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn, OneToMany } from 'typeorm';
import { IRole } from '../../Interfaces/role.interface';
import { UserModel } from './user.model';


@Entity({name: 'role'})
export class RoleModel extends BaseEntity implements IRole {

  @ObjectIdColumn()
  id: ObjectID;

  @Column('string', { nullable: false, length: 30 })
  typeRole: string;

  @OneToMany((type => UserModel), (user: UserModel) => user.role)
  user: Array<UserModel>;

}