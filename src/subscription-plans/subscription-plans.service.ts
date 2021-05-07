import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubscriptionPlanDto } from './dto/create-subscription-plan.dto';
import { SubscriptionPlansRepository } from './repositories/subscription-plan.repository';
import { SubscriptionPlan } from 'src/entities/subscription-plan.entity';
import { UpdateSubscriptionPlanDto } from './dto/update-subscription-plan.dto';

@Injectable()
export class SubscriptionPlansService {
  constructor(
    private readonly subscriptionPlansRepository: SubscriptionPlansRepository,
  ) {}

  create(payload: CreateSubscriptionPlanDto): Promise<SubscriptionPlan> {
    return this.subscriptionPlansRepository.insertAndFetch(payload);
  }

  fetchAll(): Promise<SubscriptionPlan[]> {
    return this.subscriptionPlansRepository.getSubscriptionPlans();
  }

  async remove(id: number): Promise<void> {
    const rowsDeleted = await this.subscriptionPlansRepository.deleteById(id);

    if (!rowsDeleted) {
      throw new NotFoundException('Subscription plan not found');
    }
  }

  async update(
    id: number,
    payload: UpdateSubscriptionPlanDto,
  ): Promise<SubscriptionPlan> {
    const subscriptionPlan = await this.subscriptionPlansRepository.updateAndFetchById(
      id,
      payload,
    );

    if (!subscriptionPlan) {
      throw new NotFoundException('Subscription plan not found');
    }

    return subscriptionPlan;
  }
}
