import { Injectable } from '@nestjs/common';
import { CreateSubscriptionPlanDto } from './dto/create-subscription-plan.dto';

@Injectable()
export class SubscriptionPlansService {
  create(payload: CreateSubscriptionPlanDto): Promise<Event> {
    return this.eventsRepository.insertAndFetch(payload);
  }
}
