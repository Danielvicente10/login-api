import { Injectable } from '@nestjs/common';
import { UserDto } from './login-dtos/login-front.dto';

@Injectable()
export class LoginService {
    private users: UserDto[] = [];

    getAllUsers(): UserDto[] {
        return this.users;
    }

    insertUsers(user: UserDto): UserDto[] {
        this.users.push(user);
        return this.users;
    }
}
