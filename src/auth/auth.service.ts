import { ConflictException, Injectable } from '@nestjs/common';
import { User } from 'src/entities/users.entity';
import { UsersService } from 'src/users/users.service';
import { RegisterUserDto } from './dto/register-user.dto';

type AuthResponse = {
  user: User;
};

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async register(payload: RegisterUserDto): Promise<AuthResponse> {
    const foundUser = await this.usersService.findUserByEmail(payload.email);
    if (foundUser) {
      throw new ConflictException('User already exists');
    }

    const user = await this.usersService.createUser(payload);
    return {
      user,
    };
  }
}
