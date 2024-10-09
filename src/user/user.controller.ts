import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './dtos/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('insert')
  async insertUser(@Body() user: UserDto): Promise<UserDto> {
    return await this.userService.Create(user);
  }

  @Post('login')
  async getUser(
    @Body() body: { email: string; password: string },
  ): Promise<UserDto> {
    const { email, password } = body;
    return await this.userService.GetUser(email, password);
  }
}
