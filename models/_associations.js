const Player = require("./Player");
const ContractTeamPlayer = require("./ContractTeamPlayer");
const Team = require("./Team");
const Session = require("./Session");
const Script = require("./Script");
const ContractVideoAction = require("./ContractVideoAction");
const Video = require("./Video");
const Action = require("./Action");
const ContractTeamUser = require("./ContractTeamUser");
const User = require("./User");
const League = require("./League");
const ContractLeagueTeam = require("./ContractLeagueTeam");

// Define associations **after** models are imported
// 🔹 Action & Video Associations (0-N)
//    - > links actions to videos by creating a row in contractActionVideo
//    - > onDelete: "CASCADE" means that if an action is deleted, all contractActionVideo rows for that action will also be deleted
Action.hasMany(ContractVideoAction, {
  foreignKey: "actionId",
  onDelete: "CASCADE",
});
ContractVideoAction.belongsTo(Action, { foreignKey: "actionId" });

// 🔹 Video & Action Associations (0-N)
Video.hasMany(ContractVideoAction, {
  foreignKey: "videoId",
  onDelete: "CASCADE",
});
ContractVideoAction.belongsTo(Video, { foreignKey: "videoId" });

// 🔹 Player & Team Associations
Player.hasMany(ContractTeamPlayer, {
  foreignKey: "playerId",
  onDelete: "CASCADE",
});
Team.hasMany(ContractTeamPlayer, { foreignKey: "teamId", onDelete: "CASCADE" });
ContractTeamPlayer.belongsTo(Player, { foreignKey: "playerId" });
ContractTeamPlayer.belongsTo(Team, { foreignKey: "teamId" });

// 🔹 Session & Team Associations
Session.belongsTo(Team, { foreignKey: "teamId" }); // Team opponent

// 🔹 Video & Session Association (moved from Video.js)
Video.belongsTo(Session, { foreignKey: "sessionId" });

// 🔹 User & Team Associations: ContractTeamUser (AKA Tribes)
User.hasMany(ContractTeamUser, { foreignKey: "userId", onDelete: "CASCADE" });
Team.hasMany(ContractTeamUser, { foreignKey: "teamId", onDelete: "CASCADE" });
ContractTeamUser.belongsTo(User, { foreignKey: "userId" });
ContractTeamUser.belongsTo(Team, { foreignKey: "teamId" });

// 🔹 Script & Action Associations (1-N)
Script.hasMany(Action, {
  foreignKey: "scriptId",
  onDelete: "CASCADE",
});
Action.belongsTo(Script, { foreignKey: "scriptId" });

// 🔹 ContractTeamUser & Video Associations (1-N)
ContractTeamUser.hasMany(Video, {
  foreignKey: "contractTeamUserId",
  onDelete: "CASCADE",
});
Video.belongsTo(ContractTeamUser, { foreignKey: "contractTeamUserId" });

// 🔹 League & Team Associations
League.hasMany(ContractLeagueTeam, {
  foreignKey: "leagueId",
  onDelete: "CASCADE",
});
Team.hasMany(ContractLeagueTeam, {
  foreignKey: "teamId",
  onDelete: "CASCADE",
});
ContractLeagueTeam.belongsTo(League, { foreignKey: "leagueId" });
ContractLeagueTeam.belongsTo(Team, { foreignKey: "teamId" });

// Session cascade deletes to Script
Session.hasMany(Script, {
  foreignKey: "sessionId",
  onDelete: "CASCADE",
});
Script.belongsTo(Session, { foreignKey: "sessionId" });

console.log("✅ Associations have been set up");
