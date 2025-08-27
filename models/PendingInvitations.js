const { DataTypes } = require("sequelize");
const sequelize = require("./_connection");

const PendingInvitations = sequelize.define(
  "PendingInvitations",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "pendingInvitations",
  }
);

module.exports = PendingInvitations;
