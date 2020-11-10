import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from '../../Common/Database/Models/user.model';
import { Repository } from 'typeorm';
import { UserDto } from '../../Common/DTO/user.dto';

@Injectable()
export class UserService {

  @InjectRepository(UserModel)
  private userRepository: Repository<UserModel>;

  /**
   * Create user
   * @param userDto
   */
  async createUser(userDto: UserDto): Promise<string> {
    if (userDto) {
      try {
        await this.userRepository.create(userDto).save();
        return 'User create';
      } catch (e) {
        return 'Error internal: ' + e;
      }
    } else {
      return 'Error user created';
    }
  }

  /**
   * View users
   */
  async viewAllUser(condition: any = {}): Promise<Array<UserDto> | string> {
    try {
      const users = await this.userRepository.find({ where: { ...condition }, relations: ['role'] });
      return (users.length !== 0) ? users : 'No found users';
    } catch (e) {
      return 'Error internal: ' + e;
    }
  }

  async viewUser(condition: any = {}): Promise<UserDto | string> {
    try {
      const user = await this.userRepository.findOne({ where: { ...condition }, relations: ['role'] });
      return (user !== undefined && user) ? user : 'No found user';
    } catch (e) {
      return 'Error internal: ' + e;
    }
  }

  /**
   * Update information of user
   * @param condition
   * @param setData
   */
  async updateUser(condition: any = {}, setData: any = {}): Promise<string> {
    try {
      await this.userRepository.update({ ...condition }, { ...setData });
      return 'User update';
    } catch (e) {
      return 'Error internal: ' + e;
    }
  }

}
