import { Sequelize } from 'sequelize';
const config = require('../config/config.json');

export default new Sequelize(config);