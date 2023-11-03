const { Sequelize, Model, DataTypes } = require("sequelize");
const db = require("../db/config");

const Deck = db.define("Deck", {
  deckId: DataTypes.INTEGER,
  name: DataTypes.STRING,
  xp: DataTypes.INTEGER,
});
module.exports = Deck;
