import { Injectable, NotFoundException } from '@nestjs/common';
import { Tour } from 'src/entities/tours.entity';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { ToursRepository } from './repositories/tours.repository';

@Injectable()
export class ToursService {
  constructor(private readonly toursRepository: ToursRepository) {}

  findAll(): Promise<Tour[]> {
    return this.toursRepository.getTours();
  }

  create(payload: CreateTourDto): Promise<Tour> {
    return this.toursRepository.insertAndFetch(payload);
  }

  async findOne(id: number): Promise<Tour> {
    const tour = await this.toursRepository.findById(id);

    if (!tour) {
      throw new NotFoundException('Tour not found');
    }

    return tour;
  }

  async update(id: number, payload: UpdateTourDto): Promise<Tour> {
    const tour = await this.toursRepository.updateAndFetchById(id, payload);

    if (!tour) {
      throw new NotFoundException('Tour not found');
    }

    return tour;
  }

  async remove(id: number): Promise<void> {
    const rowsDeleted = await this.toursRepository.deleteById(id);

    if (!rowsDeleted) {
      throw new NotFoundException('Tour not found');
    }
  }

  async addPaticipant(id: number, participantId: number): Promise<Tour> {
    const tour = await this.toursRepository.addParticipant(id, participantId);

    if (!tour) {
      throw new NotFoundException('tour not found');
    }

    return tour;
  }
}
