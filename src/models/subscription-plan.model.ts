import { Model } from 'objection';

class SubscriptionPlanModel extends Model {
  static tableName = 'subscription_plans';

  id: number;
  title: string;
  price: number;
  duration: number;
  createdAt: string;

  static get relationMappings() {}
}

module.exports = SubscriptionPlanModel;
export default SubscriptionPlanModel;