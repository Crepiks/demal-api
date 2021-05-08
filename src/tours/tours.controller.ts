import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ToursService } from './tours.service';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { AddPartipantDto } from './dto/add-participant.dto';

@Controller('api/tours')
export class ToursController {
  constructor(private readonly toursService: ToursService) {}

  @Get()
  async findAll() {
    return {
      tours: await this.toursService.findAll(),
    };
  }

  @Post()
  async create(@Body() createTourDto: CreateTourDto) {
    return {
      tour: await this.toursService.create(createTourDto),
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return {
      tour: await this.toursService.findOne(+id),
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTourDto: UpdateTourDto) {
    return {
      tour: await this.toursService.update(+id, updateTourDto),
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toursService.remove(+id);
  }

  @Post(':id/participants')
  async addPaticipant(
    @Param('id') id: string,
    @Body() addPartipantDto: AddPartipantDto,
  ) {
    return {
      tour: await this.toursService.addPaticipant(
        +id,
        addPartipantDto.participantId,
      ),
    };
  }
}
