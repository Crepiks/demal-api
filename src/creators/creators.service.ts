import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateCreatorDto } from './dto/create-creator.dto';
import { CreatorsRepository } from './repositories/creators.repository';

@Injectable()
export class CreatorsService {
  constructor(private readonly creatorsRepository: CreatorsRepository) {}

  async create(payload: CreateCreatorDto): Promise<string> {
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

    return selfEmployedId;
  }
}
