![Logo](./docs/images/kyberVisionLogo01.png)

A Sequelize SQLite module for the KyberVisionAPI18 and microservices suite of applications.

- Renamed Tables

  - CompetitionContracts: ContractLeagueTeam
  - playerContracts: ContractTeamPlayer
  - groupContracts: ContractTeamUser (Tribe)
  - syncContracts: ContractVideoAction
    - renamed and restructured to delta time for each action

- we are using YouTube to stream the videos

### API v0.18.0

## installation

1. `npm init -y`
2. `npm install sequelize sqlite3`

## import to other apps

`yarn add file:../KyberVision18Db`

## Environmental Variables

- No .env file is needed becuase this package will use the .env vars from the project it is imported into.
