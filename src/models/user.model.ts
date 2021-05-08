import { Model } from 'objection';

class UserModel extends Model {
  static tableName = 'users';

  id: number;
  firstName: string;
  lastName: string;
  email: string;
  emailConfirmedAt: string;
  password: string;
  selfEmployedId: string;
  createdAt: string;

  static get relationMappings() {
    const TourModel = require('./tour.model');
    const SubscriptionModel = require('./subscription.model');

    return {
      subscriptions: {
        relation: Model.HasManyRelation,
        modelClass: SubscriptionModel,
        join: {
          from: 'users.id',
          to: 'subscriptions.userId',
        },
      },
      participatingTours: {
        relation: Model.ManyToManyRelation,
        modelClass: TourModel,
        join: {
          from: 'users.id',
          through: {
            from: 'participants.userId',
            to: 'participants.tourId',
          },
          to: 'tours.id',
        },
      },
    };
  }
}

module.exports = UserModel;
export default UserModel;
