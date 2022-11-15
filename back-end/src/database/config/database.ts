import { Options } from 'sequelize';

const config: Options = {
  dialect: 'postgres',
  username: 'root',
  password: 'password',
  database: 'NG_CASH',
  host: 'localhost',
  port: 3002,
  define: {
    underscored: true,
  }
}

module.exports = config;