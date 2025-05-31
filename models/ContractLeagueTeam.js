// NR: refactored 2025-03-13
const { DataTypes } = require("sequelize");
const sequelize = require("./_connection");

// const CompetitionContract = sequelize.define(
//   "CompetitionContract",
const ContractLeagueTeam = sequelize.define(
  "ContractLeagueTeam",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    leagueId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    teamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "contractLeagueTeam",
  }
);

module.exports = ContractLeagueTeam;
