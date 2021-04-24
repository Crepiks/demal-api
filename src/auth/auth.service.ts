import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/entities/users.entity';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';

type Auth = {
  token: string;
};

type AuthResponse = {
  user: User;
  auth: Auth;
};

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(payload: RegisterUserDto): Promise<AuthResponse> {
    const foundUser = await this.usersService.findUserByEmail(payload.email);
    if (foundUser) {
      throw new ConflictException('User already exists');
    }

    const user = await this.usersService.createUser(payload);
    const token = this.generateToken({ id: user.id, email: user.email });
    return {
      user,
      auth: {
        token,
      },
    };
  }

  async login(payload: LoginUserDto): Promise<AuthResponse> {
    const user = await this.usersService.validateUserByCredentials(
      payload.email,
      payload.password,
    );
    if (!user) {
      throw new UnauthorizedException('Bad credentials');
    }

    const token = await this.generateToken({ id: user.id, email: user.email });

    return {
      user,
      auth: {
        token,
      },
    };
  }

  generateToken(payload: any): string {
    return this.jwtService.sign(payload);
  }
}
