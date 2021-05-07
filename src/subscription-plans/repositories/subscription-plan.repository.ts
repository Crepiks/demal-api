import { Injectable } from '@nestjs/common';
import { SubscriptionPlan } from 'src/entities/subscription-plan.entity';
import SubscriptionPlanModel from 'src/models/subscription-plan.model';
import { CreateSubscriptionPlanDto } from '../dto/create-subscription-plan.dto';

@Injectable()
export class SubscriptionPlansRepository {
  getSubscriptionPlans(): Promise<SubscriptionPlan[]> {
    return SubscriptionPlanModel.query();
  }

  insertAndFetch(
    payload: CreateSubscriptionPlanDto,
  ): Promise<SubscriptionPlan> {
    return SubscriptionPlanModel.query().insertAndFetch(payload);
  }

  // findById(id: number): Promise<Event> {
  //   return EventModel.query().findById(id).withGraphFetched({
  //     creator: true,
  //     participants: true,
  //     images: true,
  //   });
  // }
  // updateAndFetchById(id: number, payload: UpdateEventDto): Promise<Event> {
  //   return EventModel.query().patchAndFetchById(id, payload);
  // }
  // deleteById(id: number): Promise<number> {
  //   return EventModel.query().deleteById(id);
  // }
  // async addParticipant(eventId: number, participantId: number): Promise<Event> {
  //   await EventModel.relatedQuery('participants')
  //     .for(eventId)
  //     .relate(participantId);
  //   const event = await EventModel.query().findById(eventId).withGraphFetched({
  //     creator: true,
  //     participants: true,
  //   });
  //   return event;
  // }
}
