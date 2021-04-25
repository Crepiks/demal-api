import { Module } from '@nestjs/common';
import { CreatorsService } from './creators.service';
import { CreatorsController } from './creators.controller';
import { CreatorsRepository } from './repositories/creators.repository';

@Module({
  controllers: [CreatorsController],
  providers: [CreatorsService, CreatorsRepository],
})
export class CreatorsModule {}
