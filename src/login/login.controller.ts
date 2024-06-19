import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { UserDto } from './login-dtos/login-front.dto';

@Controller('user')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('insertUsers')
  async insertUser(@Body() user: UserDto): Promise<string> {
    const newUser = await this.loginService.insertUser(user);
    return `Success: ${newUser.email} has been inserted.`;
  }
}
