import { Injectable } from '@nestjs/common';
import { SubscriptionPlan } from 'src/entities/subscription-plan.entity';
import SubscriptionPlanModel from 'src/models/subscription-plan.model';
import { CreateSubscriptionPlanDto } from '../dto/create-subscription-plan.dto';
import { UpdateSubscriptionPlanDto } from '../dto/update-subscription-plan.dto';

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

  updateAndFetchById(
    id: number,
    payload: UpdateSubscriptionPlanDto,
  ): Promise<SubscriptionPlan> {
    return SubscriptionPlanModel.query().patchAndFetchById(id, payload);
  }

  deleteById(id: number): Promise<number> {
    return SubscriptionPlanModel.query().deleteById(id);
  }
}
