import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';
import Accounts from './Accounts';

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
}, {
  sequelize: db,
  timestamps: false,
  tableName: 'users'
});

Accounts.hasOne(Users, { foreignKey: 'accountId', as: 'users' });

Users.belongsTo(Accounts, { foreignKey: 'accountId', as: 'accounts' });

export default Users;