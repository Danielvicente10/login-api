import { Body, Controller, Post } from '@nestjs/common';
import { UserCompletedDto } from './dtos/user-completed';
import { UserDto } from './dtos/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('insert')
  async insertUser(@Body() user: UserDto): Promise<UserDto> {
    return await this.userService.Create(user);
  }

  @Post('access')
  async getUser(
    @Body() body: { email: string; password: string },
  ): Promise<UserDto> {
    const { email, password } = body;
    return await this.userService.GetUser(email, password);
  }

  @Post('insertCompleted')
  async insertUserCompleted(@Body() body: UserCompletedDto) {
    await this.userService.CreatFullUser(body);
  }
}
