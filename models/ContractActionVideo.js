const { DataTypes } = require("sequelize");
const sequelize = require("./_connection");

// Formerly  "SyncContract",
const ContractActionVideo = sequelize.define(
  "ContractActionVideo",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    actionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    videoId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    deltaTimeInSeconds: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0.0,
    },
  },
  {
    tableName: "contractActionVideo",
  }
);

module.exports = ContractActionVideo;
