import { Body, Controller, Param, Post } from '@nestjs/common';
import { CreatorsService } from './creators.service';
import { CreateCreatorDto } from './dto/create-creator.dto';

@Controller('api/creators')
export class CreatorsController {
  constructor(private readonly creatorsService: CreatorsService) {}

  @Post(':id')
  create(@Param('id') id: string, @Body() createCreatorDto: CreateCreatorDto) {
    return this.creatorsService.create(+id, createCreatorDto);
  }
}
