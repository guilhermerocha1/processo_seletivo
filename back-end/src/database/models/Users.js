const { Model, DataTypes } = require('sequelize');

class Users extends Model {
  static init(sequelize) {
    super.init({
      usermame: DataTypes.STRING,
      password: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

export default Users;