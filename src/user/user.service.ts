import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { BcryptUtil } from 'src/Utils/bcrypt';
import { UserCompletedDto } from './dtos/user-completed';
import { UserDto } from './dtos/user.dto';
import { UserFullMapper } from './mappers/user-completed';
import { UserMapper } from './mappers/user.mapper';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}
  async Create(userDto: UserDto): Promise<UserDto> {
    const userEntity = UserMapper.DtoToEntity(userDto);
    const salt = await bcrypt.genSalt(10);
    userEntity.password = userEntity.password = await BcryptUtil.hashPassword(
      userEntity.password,
      salt,
    );

    const user = await this.userRepository.createUser(userEntity);
    return UserMapper.EntityToDto(user);
  }

  async GetUser(email: string, password: string): Promise<UserDto> {
    const user = await this.userRepository.getUser(email);
    if (user == null) {
      throw new BadRequestException('Erro ao buscar usuário', {
        cause: new Error(),
        description: 'Erro ao buscar usuário',
      });
    }
    const isPasswordValid = await BcryptUtil.comparePasswords(
      password,
      user.password,
    );
    if (isPasswordValid && user.email === email) {
      return UserMapper.EntityToDto(user);
    }
    throw new BadRequestException('Erro ao buscar usuário', {
      cause: new Error(),
      description: 'Erro ao buscar usuário',
    });
  }
  async CreatFullUser(userCompletedDto: UserCompletedDto) {
    const userCompletedEntity = UserFullMapper.DtoToEntity(userCompletedDto);
  }
}
