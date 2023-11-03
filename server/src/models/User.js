// create your User model here
const { DataTypes } = require("sequelize");
const db = require("../db/config.js");
const User = db.define("User", {
  userId: DataTypes.INTEGER,
  username: DataTypes.STRING,
});
module.exports = User;
