import { Injectable } from '@nestjs/common';
import { Event } from 'src/entities/event.entity';
import EventModel from 'src/models/event.model';
import { CreateEventDto } from '../dto/create-event.dto';

@Injectable()
export class EventsRepository {
  getEvents(): Promise<Event[]> {
    return EventModel.query();
  }

  insertAndFetch(payload: CreateEventDto): Promise<Event> {
    return EventModel.query().insertAndFetch(payload);
  }
}
