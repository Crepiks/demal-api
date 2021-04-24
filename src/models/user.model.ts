import { Model } from 'objection';

class UserModel extends Model {
  static tableName = 'users';

  id: number;
  firstName: string;
  lastName: string;
  email: string;
  emailConfirmedAt: string;
  password: string;
  createdAt: string;

  static get relationMappings() {
    const EventModel = require('./event.model');

    return {
      createdEvents: {
        relation: Model.HasManyRelation,
        modelClass: EventModel,
        join: {
          from: 'users.id',
          to: 'events.creatorId',
        },
      },
      participatingEvents: {
        relation: Model.ManyToManyRelation,
        modelClass: EventModel,
        join: {
          from: 'users.id',
          through: {
            from: 'participants.userId',
            to: 'participants.eventId',
          },
          to: 'events.id',
        },
      },
    };
  }
}

module.exports = UserModel;
export default UserModel;
