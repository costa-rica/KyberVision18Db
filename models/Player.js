const { DataTypes } = require("sequelize");
const sequelize = require("./_connection");

const Player = sequelize.define(
  "Player",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "_playerDefaultRedditAlien.png",
    },
  },
  {
    tableName: "players",
  }
);

module.exports = Player;
