import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatorsRepository } from './repositories/creators.repository';

@Injectable()
export class CreatorsService {
  constructor(private readonly creatorsRepository: CreatorsRepository) {}

  async create() {
    const token = await this.creatorsRepository.authenticate();

    if (!token) {
      throw new InternalServerErrorException('Cannot authenticate service');
    }

    return token;
  }
}
