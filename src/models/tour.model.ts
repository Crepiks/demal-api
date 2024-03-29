import { Model } from 'objection';
import UserModel from './user.model';
import TagModel from './tag.model';

class TourModel extends Model {
  static tableName = 'tours';

  id: number;
  title: string;
  description: string;
  rating: number;
  lat: number;
  lon: number;
  startingLocation: string;
  start: string;
  end: string;
  equipment: string;
  createdAt: string;
  participants: UserModel[];
  tags: TagModel[];

  static get relationMappings() {
    const UserModel = require('./user.model');
    const TagModel = require('./tag.model');
    const ImageModel = require('./image.model');

    return {
      participants: {
        relation: Model.ManyToManyRelation,
        modelClass: UserModel,
        join: {
          from: 'tours.id',
          through: {
            from: 'participants.tourId',
            to: 'participants.userId',
          },
          to: 'users.id',
        },
      },
      images: {
        relation: Model.ManyToManyRelation,
        modelClass: ImageModel,
        join: {
          from: 'tours.id',
          through: {
            from: 'tour_images.tourId',
            to: 'tour_images.imageId',
          },
          to: 'images.id',
        },
      },
      tags: {
        relation: Model.ManyToManyRelation,
        modelClass: TagModel,
        join: {
          from: 'tours.id',
          through: {
            from: 'tour_tags.tourId',
            to: 'tour_tags.tagId',
          },
          to: 'tags.id',
        },
      },
    };
  }
}

module.exports = TourModel;
export default TourModel;
