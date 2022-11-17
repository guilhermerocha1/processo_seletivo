import { Model, NUMBER} from 'sequelize';
import db from '.';

class Account extends Model {
  balance!: number;
}

Account.init({
  balance: {
    type: NUMBER,
    allowNull: false,
  }
}, {
  sequelize: db,
  timestamps: false,
  tableName: 'accounts'
});

export default Account;