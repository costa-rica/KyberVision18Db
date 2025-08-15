// NR: refactored 2025-03-13
const { DataTypes } = require("sequelize");
const sequelize = require("./_connection");

const Action = sequelize.define(
  "Action",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    complexId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pointId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    scriptId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    playerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subtype: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    quality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    zone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    setNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    scoreTeamAnalyzed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    scoreTeamOther: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rotation: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "actions",
    indexes: [
      {
        unique: true,
        fields: ["timestamp", "scriptId"],
      },
    ],
  }
);

module.exports = Action;
