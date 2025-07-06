const { DataTypes } = require("sequelize");
const sequelize = require("./_connection");

// Formerly  "SyncContract",
const ContractScriptVideo = sequelize.define(
  "ContractScriptVideo",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    scriptId: {
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
    tableName: "contractScriptVideo",
  }
);

module.exports = ContractScriptVideo;
