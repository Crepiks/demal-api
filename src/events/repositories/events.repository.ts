import { Injectable } from '@nestjs/common';
import { Event } from 'src/entities/event.entity';
import EventModel from 'src/models/event.model';

@Injectable()
export class EventsRepository {
  getEvents(): Promise<Event[]> {
    return EventModel.query();
  }
}
