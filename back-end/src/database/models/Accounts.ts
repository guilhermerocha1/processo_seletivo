import { Model, NUMBER} from 'sequelize';
import db from '.';
import Users from './Users';

class Accounts extends Model {
  balance!: number;
}

Accounts.init({
  balance: {
    type: NUMBER,
    allowNull: false,
  }
}, {
  sequelize: db,
  timestamps: false,
  tableName: 'accounts',
});

export default Accounts;