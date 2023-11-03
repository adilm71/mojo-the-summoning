const { Sequelize, Model, DataTypes } = require("sequelize");
const db = require("../db/config");

const Attack = db.define("Attack", {
  attackId: DataTypes.INTEGER,
  title: DataTypes.STRING,
  mojoCost: DataTypes.INTEGER,
  staminaCost: DataTypes.INTEGER,
});
module.exports = Attack;
