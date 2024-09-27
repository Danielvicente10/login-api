import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UserDto } from '../dtos/user.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async createUser(userEntity: UserEntity) {
    return this.prisma.user.create({
      data: {
        email: userEntity.email,
        name: userEntity.name,
        password: userEntity.password,
      },
    });
  }

  async GetUser(email: string): Promise<UserDto | null> {
    const user = await this.prisma.user.findFirst({
      where: { email: email },
      select: {
        email: true,
        name: true,
        password: true,
      },
    });
    return user;
  }
}
