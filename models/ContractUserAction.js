const { DataTypes } = require("sequelize");
const sequelize = require("./_connection");

const ContractUserAction = sequelize.define(
  "ContractUserAction",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    actionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "contractUserAction",
  }
);

module.exports = ContractUserAction;
