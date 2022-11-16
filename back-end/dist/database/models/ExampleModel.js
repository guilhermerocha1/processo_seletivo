"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// import db from '.';
// import OtherModel from './OtherModel';
class Example extends sequelize_1.Model {
}
// Example.init({
//   // ... Campos
// }, {
//   // ... Outras configs
//   underscored: true,
//   sequelize: db,
//   // modelName: 'example',
//   timestamps: false,
// });
/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */
// OtherModel.belongsTo(Example, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });
// Example.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });
exports.default = Example;
