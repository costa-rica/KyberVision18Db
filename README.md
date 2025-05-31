![Logo](./docs/images/kyberVisionLogo01.png)

A Sequelize SQLite module for the KyberVisionAPI14 and microservices suite of applications.

- Renamed Tables

  - CompetitionContracts: ContractLeagueTeam
  - playerContracts: ContractTeamPlayer
  - groupContracts: ContractTeamUser (Tribe)
  - syncContracts: ContractScriptVideo

- we are using YouTube to stream the videos

### API v0.16.0

## installation

1. `npm init -y`
2. `npm install sequelize sqlite3`

## import to other apps

`yarn add file:../KyberVision16Db`

## Environmental Variables

- No .env file is needed becuase this package will use the .env vars from the project it is imported into.
