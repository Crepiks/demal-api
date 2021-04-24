import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: number): Promise<Event> {
    const event = await this.eventsRepository.findById(id);

    if (!event) {
      throw new NotFoundException('Event not found');
    }

    return event;
  }

  async update(id: number, payload: UpdateEventDto) {
    const event = await this.eventsRepository.updateAndFetchById(id, payload);

    if (!event) {
      throw new NotFoundException('Event not found');
    }

    return event;
  }

  async remove(id: number) {
    const rowsDeleted = await this.eventsRepository.deleteById(id);

    if (!rowsDeleted) {
      throw new NotFoundException('Event not found');
    }
  }
}
