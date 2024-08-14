import { Injectable } from '@nestjs/common';
import { UserDto } from './login-dtos/login-front.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LoginService {
  constructor(private readonly prisma: PrismaService) {}

  
  async insertUser(user: UserDto) {
    return this.prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: user.password
      },
    });
  }
}
