import { User } from '@prisma/client';
import { UserCompletedDto } from '../dtos/user-completed';
import { UserDto } from '../dtos/user.dto';
import { UserCreatedEntity } from '../entities/user-created';
import { UserEntity } from '../entities/user.entity';

export class UserFullMapper {
  static DtoToEntity(userCompletedDto: UserCompletedDto): UserCreatedEntity {
    const userCreatedEntity = new UserCreatedEntity();

    userCreatedEntity.birth = userCompletedDto.birth;
    userCreatedEntity.cpf = userCompletedDto.cpf;
    userCreatedEntity.rg = userCompletedDto.rg;
    userCreatedEntity.fatherName = userCompletedDto.fatherName;
    userCreatedEntity.motherName = userCompletedDto.motherName;
    userCreatedEntity.phone = userCompletedDto.phone;
    userCreatedEntity.photo = userCompletedDto.photo;

    return userCreatedEntity;
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
