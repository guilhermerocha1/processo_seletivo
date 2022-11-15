import { Options } from 'sequelize';

const config: Options = {
  username: 'root',
  password: 'password',
  database: 'NG_CASH',
  host: 'localhost',
  port: 3001,
  dialect: 'postgres',
  define: {
    underscored: true,
  }
}

module.exports = config;