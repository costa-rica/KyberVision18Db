const { DataTypes } = require("sequelize");
const sequelize = require("./_connection");

const ContractTeamPlayer = sequelize.define(
  "ContractTeamPlayer",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    playerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    teamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    shirtNumber: {
      type: DataTypes.INTEGER,
    },
    position: {
      type: DataTypes.STRING,
    },
    positionAbbreviation: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "contractTeamPlayer",
  }
);

module.exports = ContractTeamPlayer;
