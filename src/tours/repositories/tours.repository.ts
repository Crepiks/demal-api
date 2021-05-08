import { Injectable } from '@nestjs/common';
import { Tour } from 'src/entities/tours.entity';
import TourModel from 'src/models/tour.model';
import { CreateTourDto } from '../dto/create-tour.dto';
import { UpdateTourDto } from '../dto/update-tour.dto';

@Injectable()
export class ToursRepository {
  getTours(): Promise<Tour[]> {
    return TourModel.query().withGraphFetched({
      creator: true,
      participants: true,
      images: true,
    });
  }

  insertAndFetch(payload: CreateTourDto): Promise<Tour> {
    return TourModel.query().insertAndFetch(payload);
  }

  findById(id: number): Promise<Tour> {
    return TourModel.query().findById(id).withGraphFetched({
      creator: true,
      participants: true,
      images: true,
    });
  }

  updateAndFetchById(id: number, payload: UpdateTourDto): Promise<Tour> {
    return TourModel.query().patchAndFetchById(id, payload);
  }

  deleteById(id: number): Promise<number> {
    return TourModel.query().deleteById(id);
  }

  async addParticipant(tourId: number, participantId: number): Promise<Tour> {
    await TourModel.relatedQuery('participants')
      .for(tourId)
      .relate(participantId);
    const tour = await TourModel.query().findById(tourId).withGraphFetched({
      tags: true,
      participants: true,
    });

    return tour;
  }

  async addTag(tourId: number, tagId: number): Promise<Tour> {
    await TourModel.relatedQuery('tags').for(tourId).relate(tagId);
    const tour = await TourModel.query().findById(tourId).withGraphFetched({
      tags: true,
      participants: true,
    });

    return tour;
  }
}
