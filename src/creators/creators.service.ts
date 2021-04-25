import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { User } from 'src/entities/users.entity';
import { CreateCreatorDto } from './dto/create-creator.dto';
import { CreatorsRepository } from './repositories/creators.repository';

@Injectable()
export class CreatorsService {
  constructor(private readonly creatorsRepository: CreatorsRepository) {}

  async create(id: number, payload: CreateCreatorDto): Promise<User> {
    const token = await this.creatorsRepository.authenticate();
    if (!token) {
      throw new InternalServerErrorException('Could not authenticate service');
    }

    const selfEmployedId = await this.creatorsRepository.registerSelfEmployed(
      token,
      payload,
    );
    if (!selfEmployedId) {
      throw new InternalServerErrorException(
        'Could not register self employed',
      );
    }

    const bindingId = await this.creatorsRepository.bindSelfEmployed(
      token,
      selfEmployedId,
    );
    if (!bindingId) {
      throw new InternalServerErrorException('Could not bind self employed');
    }

    const user = await this.creatorsRepository.addSelfEmployedIdToUser(
      id,
      selfEmployedId,
    );
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
