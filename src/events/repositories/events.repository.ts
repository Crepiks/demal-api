import { Injectable } from '@nestjs/common';
import { Event } from 'src/entities/event.entity';
import EventModel from 'src/models/event.model';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from '../dto/update-event.dto';

@Injectable()
export class EventsRepository {
  getEvents(): Promise<Event[]> {
    return EventModel.query();
  }

  insertAndFetch(payload: CreateEventDto): Promise<Event> {
    return EventModel.query().insertAndFetch(payload);
  }

  findById(id: number): Promise<Event> {
    return EventModel.query().findById(id);
  }

  updateAndFetchById(id: number, payload: UpdateEventDto): Promise<Event> {
    return EventModel.query().patchAndFetchById(id, payload);
  }
}
