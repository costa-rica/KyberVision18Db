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
    },
    actionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sessionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "contractUserAction",
    indexes: [
      {
        name: "contractUserAction_user_action_unique",
        unique: true,
        fields: ["userId", "actionId"],
      },
    ],
  }
);

module.exports = ContractUserAction;
