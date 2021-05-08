import { Injectable } from '@nestjs/common';
import { SubscriptionsRepository } from './repositories/subscription.repository';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { Subscription } from 'src/entities/subscription.entity';

@Injectable()
export class SubscriptionsService {
  constructor(
    private readonly subscriptionsRepository: SubscriptionsRepository,
  ) {}

  create(payload: CreateSubscriptionDto): Promise<Subscription> {
    return this.subscriptionsRepository.insertAndFetch(payload);
  }
}
