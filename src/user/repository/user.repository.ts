import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
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
}
