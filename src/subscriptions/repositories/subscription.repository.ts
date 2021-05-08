import { Injectable } from '@nestjs/common';
import { Subscription } from 'src/entities/subscription.entity';
import UserModel from 'src/models/user.model';
import { CreateSubscriptionDto } from '../dto/create-subscription.dto';
import moment from 'moment';

@Injectable()
export class SubscriptionsRepository {
  async insertAndFetch(payload: CreateSubscriptionDto): Promise<Subscription> {
    const getLastSubscription = (user: any) => {
      return user
        .$relatedQuery('subscriptions')
        .orderBy('expiresAt', 'DESC')
        .first() as Subscription;
    };

    const findExpirationDate = (
      lastSubscription: Subscription,
      daysToAdd: number,
    ): string => {
      let expiresAt: string;
      if (!lastSubscription) {
        expiresAt = moment().add(daysToAdd, 'days').format('YYYY-MM-DD HH:mm');
      } else {
        expiresAt = moment(lastSubscription.expiresAt)
          .add(daysToAdd, 'days')
          .format('YYYY-MM-DD HH:mm');
      }

      return expiresAt;
    };

    const insertPayload = (user: any, payload: any) => {
      return user.$relatedQuery('subscriptions').insert(payload);
    };

    const { daysToAdd, userId } = payload;
    const user = await UserModel.query().findById(userId);
    const lastSubscription = await getLastSubscription(user);
    const expiresAt = await findExpirationDate(
      lastSubscription,
      parseInt(daysToAdd),
    );
    const subscriptionPayload = { expiresAt };

    const subscription = await insertPayload(user, subscriptionPayload);

    return subscription;
  }
}
