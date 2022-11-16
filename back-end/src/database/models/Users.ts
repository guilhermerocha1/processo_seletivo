import { Model, STRING, INTEGER} from 'sequelize';
import db from '.';

class Users extends Model {
  username!: string;
  password!: string;
}

Users.init({
  username: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  accountId: {
    type: INTEGER,
  }
}, {
  sequelize: db,
  timestamps: false,
  tableName: 'users'
});

export default Users;