// index.js
const sequelize = require("./_connection");
// Load associations
require("./_associations");
// Import models directly
const User = require("./User");
const Video = require("./Video");
const Action = require("./Action");
// const CompetitionContract = require("./CompetitionContract");
const Complex = require("./Complex");
const ContractLeagueTeam = require("./ContractLeagueTeam");
const ContractVideoAction = require("./ContractVideoAction");
const ContractTeamPlayer = require("./ContractTeamPlayer");
const ContractTeamUser = require("./ContractTeamUser");
const ContractPlayerUser = require("./ContractPlayerUser");
const League = require("./League");
const Session = require("./Session");
const OpponentServeTimestamp = require("./OpponentServeTimestamp");
const Player = require("./Player");
// const PlayerContract = require("./PlayerContract");
// const Point = require("./Point");
const Script = require("./Script");
// const SyncContract = require("./SyncContract");
const Team = require("./Team");

module.exports = {
  sequelize,
  User,
  Video,
  Action,
  Complex,
  ContractLeagueTeam,
  ContractVideoAction,
  ContractTeamPlayer,
  ContractTeamUser,
  ContractPlayerUser,
  League,
  Session,
  OpponentServeTimestamp,
  Player,
  // Point,
  Script,
  Team,
};
