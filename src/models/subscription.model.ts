import { Model } from 'objection';
import UserModel from './user.model';

class Subscription extends Model {
  static tableName = 'subscriptions';

  id!: number;
  expiresAt!: string;
  createdAt!: string;
  user!: UserModel;

  static get relationMappings() {
    const SubscriptionPlan = require('./SubscriptionPlan');
    const User = require('./User');

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'subscriptions.userId',
          to: 'users.id',
        },
      },
    };
  }
}

module.exports = Subscription;
export default Subscription;
