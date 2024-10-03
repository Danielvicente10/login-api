import { User } from '@prisma/client';
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

  static EntityToDto(userEntity: UserEntity): UserDto {
    const userDto = new UserDto();

    userDto.email = userEntity.email;
    userDto.name = userEntity.name;
    userDto.password = userEntity.password;

    return userDto;
  }

  static PrismaToEntity(user: User): UserEntity {
    const userEntity = new UserEntity();
    if (user.id != null) {
      userEntity.id = user.id;
      userEntity.email = user.email;
      userEntity.name = user.name;
      userEntity.password = user.password;
      userEntity.createdAt = user.createdAt;
      userEntity.updatedAt = user.updatedAt;
      userEntity.deletedAt = user.deletedAt ?? null;
    }

    return userEntity;
  }
}
