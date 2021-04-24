import { Injectable } from '@nestjs/common';
import { Event } from 'src/entities/event.entity';
import EventModel from 'src/models/event.model';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from '../dto/update-event.dto';

@Injectable()
export class EventsRepository {
  getEvents(): Promise<Event[]> {
    return EventModel.query().withGraphFetched({
      creator: true,
      participants: true,
    });
  }

  insertAndFetch(payload: CreateEventDto): Promise<Event> {
    return EventModel.query().insertAndFetch(payload);
  }

  findById(id: number): Promise<Event> {
    return EventModel.query().findById(id).withGraphFetched({
      creator: true,
      participants: true,
    });
  }

  updateAndFetchById(id: number, payload: UpdateEventDto): Promise<Event> {
    return EventModel.query().patchAndFetchById(id, payload);
  }

  deleteById(id: number): Promise<number> {
    return EventModel.query().deleteById(id);
  }
}
