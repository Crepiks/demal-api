import { Body, Controller, Post } from '@nestjs/common';
import { CreatorsService } from './creators.service';
import { CreateCreatorDto } from './dto/create-creator.dto';

@Controller('api/creators')
export class CreatorsController {
  constructor(private readonly creatorsService: CreatorsService) {}

  @Post()
  create(@Body() createCreatorDto: CreateCreatorDto) {
    return this.creatorsService.create(createCreatorDto);
  }
}
