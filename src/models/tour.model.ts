import { Model } from 'objection';
import UserModel from './user.model';

class TourModel extends Model {
  static tableName = 'tours';

  id: number;
  title: string;
  decription: string;
  rating: number;
  lat: number;
  lon: number;
  startingLocation: string;
  start: string;
  end: string;
  equipment: string;
  createdAt: string;
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

module.exports = TourModel;
export default TourModel;
