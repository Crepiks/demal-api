import { Controller, Body, Post, Delete, Param } from '@nestjs/common';
import { TagsService } from './tags.service';
import { CreateTagDto } from './dto/create-tag.dto';

@Controller('api/tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  async create(@Body() createTagDto: CreateTagDto) {
    return {
      tag: await this.tagsService.create(createTagDto),
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tagsService.remove(+id);
  }
}
