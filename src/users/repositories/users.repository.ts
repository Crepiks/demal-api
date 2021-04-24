import { Injectable } from '@nestjs/common';
import UserModel from 'src/models/user.model';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../../entities/users.entity';

@Injectable()
export class UsersRepository {
  findByEmail(email: string): Promise<User> {
    return UserModel.query().findOne({ email }).withGraphFetched({
      createdEvents: true,
      participatingEvents: true,
    });
  }

  insertAndFetch(payload: CreateUserDto): Promise<User> {
    return UserModel.query().insertAndFetch(payload);
  }

  findUserById(id: number): Promise<User> {
    return UserModel.query().findById(id).withGraphFetched({
      createdEvents: true,
      participatingEvents: true,
    });
  }
}
