import { Injectable } from '@nestjs/common';
import { UserDto } from './dtos/user.dto';
import { UserMapper } from './mappers/user.mapper';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async Create(userDto: UserDto) {
    const user = UserMapper.DtoToEntity(userDto);
    const criar = this.userRepository.createUser(user);
  }
}
