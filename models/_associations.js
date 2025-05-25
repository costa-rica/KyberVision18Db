const Player = require("./Player");
const PlayerContract = require("./PlayerContract");
const Team = require("./Team");
const Match = require("./Match");
const Script = require("./Script");
const SyncContract = require("./SyncContract");
const Video = require("./Video");
const Action = require("./Action");
const GroupContract = require("./GroupContract");
const User = require("./User");

// Define associations **after** models are imported

// 🔹 Player & Team Associations
Player.hasMany(PlayerContract, { foreignKey: "playerId", onDelete: "CASCADE" });
Team.hasMany(PlayerContract, { foreignKey: "teamId", onDelete: "CASCADE" });
PlayerContract.belongsTo(Player, { foreignKey: "playerId" });
PlayerContract.belongsTo(Team, { foreignKey: "teamId" });

// 🔹 Match & Team Associations
Match.belongsTo(Team, { foreignKey: "teamIdAnalyzed", as: "teamOne" }); // Team analyzed
Match.belongsTo(Team, { foreignKey: "teamIdOpponent", as: "teamTwo" }); // Team opponent

// 🔹 Script & SyncContract Associations (1-N)
Script.hasMany(SyncContract, { foreignKey: "scriptId", onDelete: "CASCADE" });
SyncContract.belongsTo(Script, { foreignKey: "scriptId" });

// 🔹 Video & SyncContract Associations (0-N)
Video.hasMany(SyncContract, { foreignKey: "videoId", onDelete: "CASCADE" });
SyncContract.belongsTo(Video, { foreignKey: "videoId" });

// 🔹 Video & Match Association (moved from Video.js)
Video.belongsTo(Match, { foreignKey: "matchId", as: "match" });

// // 🔹 SyncContract & Action Associations (1-N)
// SyncContract.hasMany(Action, {
//   foreignKey: "syncContractId",
//   onDelete: "CASCADE",
// });
// Action.belongsTo(SyncContract, { foreignKey: "syncContractId" });

// 🔹 User & Team Associations: GroupContract (AKA Tribes)
User.hasMany(GroupContract, { foreignKey: "userId", onDelete: "CASCADE" });
Team.hasMany(GroupContract, { foreignKey: "teamId", onDelete: "CASCADE" });
GroupContract.belongsTo(User, { foreignKey: "userId" });
GroupContract.belongsTo(Team, { foreignKey: "teamId" });

// ---- MODIFICATIONS KV15 -----

// 🔹 Script & SyncContract Associations (1-N)
Script.hasMany(SyncContract, {
  foreignKey: "scriptId",
  onDelete: "CASCADE",
});
SyncContract.belongsTo(Script, { foreignKey: "scriptId" });

// 🔹 Script & Action Associations (1-N)
Script.hasMany(Action, {
  foreignKey: "scriptId",
  onDelete: "CASCADE",
});
Action.belongsTo(Script, { foreignKey: "scriptId" });

console.log("✅ Associations have been set up");
