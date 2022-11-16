"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config = require('../config/config.json');
exports.default = new sequelize_1.Sequelize(config);
