import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '../entities/users.entity';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async validateUserByCredentials(
    email: string,
    password: string,
  ): Promise<boolean> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user.password === password;
  }

  createUser(payload: CreateUserDto): Promise<User> {
    return this.usersRepository.insertAndFetch(payload);
  }

  findUserByEmail(email: string): Promise<User> {
    return this.usersRepository.findByEmail(email);
  }
}
