const Player = require("./Player");
// const PlayerContract = require("./PlayerContract");
const ContractTeamPlayer = require("./ContractTeamPlayer");
const Team = require("./Team");
const Match = require("./Match");
const Script = require("./Script");
// const SyncContract = require("./SyncContract");
const ContractScriptVideo = require("./ContractScriptVideo");
const Video = require("./Video");
const Action = require("./Action");
// const GroupContract = require("./GroupContract");
const ContractTeamUser = require("./ContractTeamUser");
const User = require("./User");
const League = require("./League");
// const CompetitionContract = require("./CompetitionContract");
const ContractLeagueTeam = require("./ContractLeagueTeam");

// Define associations **after** models are imported

// 🔹 Player & Team Associations
// Player.hasMany(PlayerContract, { foreignKey: "playerId", onDelete: "CASCADE" });
Player.hasMany(ContractTeamPlayer, {
  foreignKey: "playerId",
  onDelete: "CASCADE",
});
Team.hasMany(ContractTeamPlayer, { foreignKey: "teamId", onDelete: "CASCADE" });
ContractTeamPlayer.belongsTo(Player, { foreignKey: "playerId" });
ContractTeamPlayer.belongsTo(Team, { foreignKey: "teamId" });

// 🔹 Match & Team Associations
Match.belongsTo(Team, { foreignKey: "teamIdAnalyzed", as: "teamOne" }); // Team analyzed
Match.belongsTo(Team, { foreignKey: "teamIdOpponent", as: "teamTwo" }); // Team opponent

// 🔹 Script & ContractScriptVideo Associations (1-N)
// Script.hasMany(SyncContract, { foreignKey: "scriptId", onDelete: "CASCADE" });
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

// 🔹 Video & Match Association (moved from Video.js)
Video.belongsTo(Match, { foreignKey: "matchId", as: "match" });

// // 🔹 SyncContract & Action Associations (1-N)
// SyncContract.hasMany(Action, {
//   foreignKey: "syncContractId",
//   onDelete: "CASCADE",
// });
// Action.belongsTo(SyncContract, { foreignKey: "syncContractId" });

// 🔹 User & Team Associations: ContractTeamUser (AKA Tribes)
User.hasMany(ContractTeamUser, { foreignKey: "userId", onDelete: "CASCADE" });
Team.hasMany(ContractTeamUser, { foreignKey: "teamId", onDelete: "CASCADE" });
ContractTeamUser.belongsTo(User, { foreignKey: "userId" });
ContractTeamUser.belongsTo(Team, { foreignKey: "teamId" });

// ---- MODIFICATIONS KV15 -----

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
League.hasMany(CompetitionContract, {
  foreignKey: "leagueId",
  onDelete: "CASCADE",
});
Team.hasMany(CompetitionContract, {
  foreignKey: "teamId",
  onDelete: "CASCADE",
});
CompetitionContract.belongsTo(League, { foreignKey: "leagueId" });
CompetitionContract.belongsTo(Team, { foreignKey: "teamId" });

console.log("✅ Associations have been set up");
