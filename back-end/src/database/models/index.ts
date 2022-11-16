import { Sequelize } from 'sequelize';
const { development } = require('../config/config.json');

export default new Sequelize(development);