import { Model } from 'objection';
import UserModel from './user.model';

class EventModel extends Model {
  static tableName = 'events';

  id: number;
  title: string;
  decription: string;
  lat: number;
  lon: number;
  start: string;
  end: string;
  price: number;
  createdAt: string;
  creatorId: UserModel;
  participants: UserModel[];

  static get relationMappings() {
    const UserModel = require('./user.model');
    const ImageModel = require('./image.model');

    return {
      creator: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: 'events.creatorId',
          to: 'users.id',
        },
      },
      participants: {
        relation: Model.ManyToManyRelation,
        modelClass: UserModel,
        join: {
          from: 'events.id',
          through: {
            from: 'participants.eventId',
            to: 'participants.userId',
          },
          to: 'users.id',
        },
      },
      images: {
        relation: Model.ManyToManyRelation,
        modelClass: ImageModel,
        join: {
          from: 'events.id',
          through: {
            from: 'event_images.eventId',
            to: 'event_images.imageId',
          },
          to: 'images.id',
        },
      },
    };
  }
}

module.exports = EventModel;
export default EventModel;
