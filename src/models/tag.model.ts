import { Model } from 'objection';

class TagModel extends Model {
  static tableName = 'tags';

  id: number;
  title: string;
  createdAt: string;

  static get relationMappings() {
    const TourModel = require('./tour.model');

    return {
      tours: {
        relation: Model.ManyToManyRelation,
        modelClass: TourModel,
        join: {
          from: 'tags.id',
          through: {
            from: 'tour_tags.tagId',
            to: 'tour_tags.tourId',
          },
          to: 'tour.id',
        },
      },
    };
  }
}

module.exports = TagModel;
export default TagModel;
