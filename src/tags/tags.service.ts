import { Injectable, NotFoundException } from '@nestjs/common';
import { TagsRepository } from './repositories/tags.repository';
import { CreateTagDto } from './dto/create-tag.dto';
import { Tag } from 'src/entities/tag.entity';

@Injectable()
export class TagsService {
  constructor(private readonly tagsRepository: TagsRepository) {}

  create(payload: CreateTagDto): Promise<Tag> {
    return this.tagsRepository.insertAndFetch(payload);
  }

  async remove(id: number): Promise<void> {
    const rowsDeleted = await this.tagsRepository.deleteById(id);

    if (!rowsDeleted) {
      throw new NotFoundException('Tag not found');
    }
  }
}
