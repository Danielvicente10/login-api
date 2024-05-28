import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { UserDto } from './login-dtos/login-front.dto';

@Controller('user')
export class LoginController {
    constructor(private readonly loginService: LoginService) {}

    @Get('usersAll')
    async findAllUsers(): Promise<UserDto[]> {
        return this.loginService.getAllUsers();
    }

    @Post('insertUsers')
    insertUser(@Body() user: UserDto): UserDto[] {
        return this.loginService.insertUsers(user);
    }
}
