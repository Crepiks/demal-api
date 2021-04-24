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
  ): Promise<User> {
    const user = await this.usersRepository.findByEmail(email);
    if (user && user.password === password) {
      return user;
    }

    return null;
  }

  async createUser(payload: CreateUserDto): Promise<User> {
    const createdUser = await this.usersRepository.insertAndFetch(payload);
    return this.usersRepository.findUserById(createdUser.id);
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findUserById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  findUserByEmail(email: string): Promise<User> {
    return this.usersRepository.findByEmail(email);
  }
}
