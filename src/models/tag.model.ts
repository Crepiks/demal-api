import { Model } from 'objection';

class TagModel extends Model {
  static tableName = 'tags';

  id: number;
  title: string;
  createdAt: string;
}

module.exports = TagModel;
export default TagModel;
