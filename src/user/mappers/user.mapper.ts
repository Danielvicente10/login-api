import { UserDto } from '../dtos/user.dto';
import { UserEntity } from '../entities/user.entity';

export class UserMapper {
  static DtoToEntity(userDto: UserDto): UserEntity {
    const userEntity = new UserEntity();

    userEntity.email = userDto.email;
    userEntity.name = userDto.name;
    userEntity.password = userDto.password;

    return userEntity;
  }
}
