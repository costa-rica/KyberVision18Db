// NR: refactored 2025-03-13
const { DataTypes } = require("sequelize");
const sequelize = require("./_connection");
const Session = require("./Session");

const Video = sequelize.define(
  "Video",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // matchId: {
    sessionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Session,
        key: "id",
      },
    },
    // groupContractId: {
    contractTeamUserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    filename: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
    videoFileCreatedDateTimeEstimate: {
      type: DataTypes.DATE,
    },
    videoFileSizeInMb: {
      type: DataTypes.FLOAT,
    },
    pathToVideoFile: {
      type: DataTypes.STRING,
    },
    processingCompleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    processingFailed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    youTubeVideoId: {
      type: DataTypes.STRING,
    },
    originalVideoFilename: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "videos",
  }
);

module.exports = Video;
