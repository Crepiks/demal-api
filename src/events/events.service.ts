import { Injectable } from '@nestjs/common';
import { Event } from 'src/entities/event.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventsRepository } from './repositories/events.repository';

@Injectable()
export class EventsService {
  constructor(private readonly eventsRepository: EventsRepository) {}

  findAll(): Promise<Event[]> {
    return this.eventsRepository.getEvents();
  }

  create(payload: CreateEventDto): Promise<Event> {
    return this.eventsRepository.insertAndFetch(payload);
  }

  findOne(id: number) {
    return `This action returns a #${id} event`;
  }

  update(id: number, payload: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
