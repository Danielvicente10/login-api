import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UserEntity } from '../entities/user.entity';
import { UserMapper } from '../mappers/user.mapper';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}
  async createUser(userEntity: UserEntity) {
    // Obtém a data atual
    const now = new Date();
    // Subtrai 3 horas da data atual
    now.setHours(now.getHours() - 3);

    return this.prisma.user.create({
      data: {
        email: userEntity.email,
        name: userEntity.name,
        password: userEntity.password,
        createdAt: now, // Usa a data ajustada
      },
    });
  }

  async getUser(email: string): Promise<UserEntity | null> {
    const result = await this.prisma.user.findFirst({
      where: { email },
      select: {
        id: true,
        email: true,
        password: true,
        name: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
      },
    });

    if (!result) {
      return null;
    }
    return UserMapper.PrismaToEntity(result);
  }
}
