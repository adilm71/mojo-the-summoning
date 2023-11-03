const { Sequelize, Model, DataTypes } = require("sequelize");
const db = require("../db/config");

const Card = db.define("Card", {
  cardId: DataTypes.INTEGER,
  name: DataTypes.STRING,
  mojo: DataTypes.INTEGER,
  stamina: DataTypes.INTEGER,
  imgUrl: DataTypes.STRING,
});
module.exports = Card;
