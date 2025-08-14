// NR: refactored 2025-03-13
const { DataTypes } = require("sequelize");
const sequelize = require("./_connection");

// const Match = sequelize.define(
//   "Match",
const Session = sequelize.define(
  "Session",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // competitionContractId: {
    contractLeagueTeamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    teamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sessionDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
    },
    sessionName: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "sessions",
  }
);

module.exports = Session;
