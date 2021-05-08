import { Model } from 'objection';

class Subscription extends Model {
  static tableName = 'subscriptions';

  id!: number;
  userId!: number;
  expiresAt!: string;
  createdAt!: string;

  static get relationMappings() {
    const User = require('./user.model');

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
