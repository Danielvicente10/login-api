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
}
