// create your User model here
const { db } = require("../db/config");
const { DataTypes } = require("sequelize");

const User = db.define("User", {
  username: DataTypes.STRING,
});

module.exports = { User };
