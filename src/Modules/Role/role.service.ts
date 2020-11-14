import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleModel } from '../../Common/Database/Models/role.model';
import { MongoRepository } from 'typeorm';
import { RoleDto } from '../../Common/Dto/role.dto';

@Injectable()
export class RoleService {

  @InjectRepository(RoleModel)
  private roleRepository: MongoRepository<RoleModel>;

  /**
   * Create roles
   * @param role
   */
  async createRole(role: RoleDto): Promise<string> {
    if (role) {
      try {
        await this.roleRepository.create(role).save();
        return 'Role create';
      } catch (e) {
        return 'Error internal: ' + e;
      }
    } else {
      return 'Error create role';
    }
  }

  /**
   * View All roles
   */
  async viewRole(): Promise<Array<RoleDto> | string> {
    try {
      const roles = await this.roleRepository.find({});
      return (roles.length === 0) ? 'No found roles' : roles;
    } catch (e) {
      return 'Error internal: ' + e;
    }
  }
}
