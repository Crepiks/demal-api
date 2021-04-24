import { Injectable } from '@nestjs/common';
import UserModel from 'src/models/user.model';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../../entities/users.entity';

@Injectable()
export class UsersRepository {
  findByEmail(email: string): Promise<User> {
    return UserModel.query().findOne({ email });
  }

  insertAndFetch(payload: CreateUserDto): Promise<User> {
    return UserModel.query().insertAndFetch(payload);
  }
}
