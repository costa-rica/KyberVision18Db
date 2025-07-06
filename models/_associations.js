const Player = require("./Player");
const ContractTeamPlayer = require("./ContractTeamPlayer");
const Team = require("./Team");
const Session = require("./Session");
const Script = require("./Script");
const ContractScriptVideo = require("./ContractScriptVideo");
const Video = require("./Video");
const Action = require("./Action");
const ContractTeamUser = require("./ContractTeamUser");
const User = require("./User");
const League = require("./League");
const ContractLeagueTeam = require("./ContractLeagueTeam");

// Define associations **after** models are imported

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

// 🔹 Script & ContractScriptVideo Associations (1-N)
Script.hasMany(ContractScriptVideo, {
  foreignKey: "scriptId",
  onDelete: "CASCADE",
});
ContractScriptVideo.belongsTo(Script, { foreignKey: "scriptId" });

// 🔹 Video & ContractScriptVideo Associations (0-N)
Video.hasMany(ContractScriptVideo, {
  foreignKey: "videoId",
  onDelete: "CASCADE",
});
ContractScriptVideo.belongsTo(Video, { foreignKey: "videoId" });

// 🔹 Video & Session Association (moved from Video.js)
Video.belongsTo(Session, { foreignKey: "sessionId" });

// 🔹 User & Team Associations: ContractTeamUser (AKA Tribes)
User.hasMany(ContractTeamUser, { foreignKey: "userId", onDelete: "CASCADE" });
Team.hasMany(ContractTeamUser, { foreignKey: "teamId", onDelete: "CASCADE" });
ContractTeamUser.belongsTo(User, { foreignKey: "userId" });
ContractTeamUser.belongsTo(Team, { foreignKey: "teamId" });

// 🔹 Script & ContractScriptVideo Associations (1-N)
Script.hasMany(ContractScriptVideo, {
  foreignKey: "scriptId",
  onDelete: "CASCADE",
});
ContractScriptVideo.belongsTo(Script, { foreignKey: "scriptId" });

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
