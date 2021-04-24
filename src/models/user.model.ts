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
}

module.exports = UserModel;
export default UserModel;
