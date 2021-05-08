import { Injectable } from '@nestjs/common';
import { Tag } from 'src/entities/tag.entity';
import TagModel from 'src/models/tag.model';
import { CreateTagDto } from '../dto/create-tag.dto';

@Injectable()
export class TagsRepository {
  async insertAndFetch(payload: CreateTagDto): Promise<Tag> {
    return TagModel.query().insertAndFetch(payload);
  }
}
