import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './dtos/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('insertUsers')
  async insertUser(@Body() user: UserDto): Promise<string> {
    const newUser = await this.userService.Create(user);
    return 'Success';
  }

  @Post('login')
  async getUser(
    @Body() body: { email: string; password: string },
  ): Promise<UserDto | string> {
    const { email, password } = body;
    const user = await this.userService.GetUser(email, password);
    return user;
  }
}
