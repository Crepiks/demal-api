import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { EventsRepository } from './repositories/events.repository';

@Module({
  controllers: [EventsController],
  providers: [EventsService, EventsRepository],
})
export class EventsModule {}