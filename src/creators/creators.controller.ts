import { Controller, Post } from '@nestjs/common';
import { CreatorsService } from './creators.service';

@Controller('api/creators')
export class CreatorsController {
  constructor(private readonly creatorsService: CreatorsService) {}

  @Post()
  create() {
    return this.creatorsService.create()
  }
}
