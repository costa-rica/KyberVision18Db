const { DataTypes } = require("sequelize");
const sequelize = require("./_connection");

const ContractPlayerUser = sequelize.define(
  "ContractPlayerUser",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    playerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "contractPlayerUser",
  }
);

module.exports = ContractPlayerUser;
