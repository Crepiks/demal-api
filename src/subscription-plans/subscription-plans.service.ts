import { Injectable } from '@nestjs/common';
import { CreateSubscriptionPlanDto } from './dto/create-subscription-plan.dto';
import { SubscriptionPlansRepository } from './repositories/subscription-plan.repository';
import { SubscriptionPlan } from 'src/entities/subscription-plan.entity';

@Injectable()
export class SubscriptionPlansService {
  constructor(
    private readonly subscriptionPlansRepository: SubscriptionPlansRepository,
  ) {}

  create(payload: CreateSubscriptionPlanDto): Promise<SubscriptionPlan> {
    return this.subscriptionPlansRepository.insertAndFetch(payload);
  }

  fetchAll(): Promise<Event[]> {
    return this.subscriptionPlansRepository.getSubscriptionPlans();
  }
}
