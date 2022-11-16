import { Model, STRING } from 'sequelize';
import db from '.';

class Users extends Model {
  username?: string;
  password?: string;
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
}, {
  underscored: true,
  sequelize: db,
});

export default Users;