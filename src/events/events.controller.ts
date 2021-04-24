import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { AddPartipantDto } from './dto/add-participant.dto';

@Controller('api/events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  async findAll() {
    return {
      events: await this.eventsService.findAll(),
    };
  }

  @Post()
  async create(@Body() createEventDto: CreateEventDto) {
    return {
      event: await this.eventsService.create(createEventDto),
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return {
      event: await this.eventsService.findOne(+id),
    };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    return {
      event: await this.eventsService.update(+id, updateEventDto),
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(+id);
  }

  @Post(':id/participants')
  async addPaticipant(
    @Param('id') id: string,
    @Body() addPartipantDto: AddPartipantDto,
  ) {
    return {
      event: await this.eventsService.addPaticipant(
        +id,
        addPartipantDto.participantId,
      ),
    };
  }
}
