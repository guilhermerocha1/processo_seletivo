"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {
    username: "root",
    password: "password",
    database: "NG_CASH",
    host: "localhost",
    dialect: "postgres",
    port: 3002,
    logging: true
};
module.exports = config;
