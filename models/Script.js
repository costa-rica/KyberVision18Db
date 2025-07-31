// NR: refactored 2025-03-13
const { DataTypes } = require("sequelize");
const sequelize = require("./_connection");

const Script = sequelize.define(
  "Script",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // matchId: {
    sessionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    timestampReferenceFirstAction: {
      type: DataTypes.DATE,
    },
    isScriptingLive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "scripts",
  }
);

module.exports = Script;
