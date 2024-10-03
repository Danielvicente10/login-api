import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserDto } from './dtos/user.dto';
import { UserMapper } from './mappers/user.mapper';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}
  async Create(userDto: UserDto) {
    const user = UserMapper.DtoToEntity(userDto);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    const criar = await this.userRepository.createUser(user);

    return criar;
  }

  async GetUser(email: string, password: string): Promise<string | UserDto> {
    const user = await this.userRepository.getUser(email);
    if (user == null) {
      return 'Error';
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid && user.email === email) {
      return UserMapper.EntityToDto(user);
    }
    return 'Error';
  }
}
