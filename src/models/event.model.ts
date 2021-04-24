import { Model } from 'objection';

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
}

module.exports = EventModel;
export default EventModel;
