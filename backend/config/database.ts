// external modules
import dotenv from "dotenv"
import { Sequelize } from "sequelize-typescript"

// models
// import { Heartbeat } from '@/app/heartbeat/heartbeat.model'

dotenv.config({ path: ".env" });

const database =  `${process.env.DB_NAME}`
const username = `${process.env.DB_USER}`
const password = `${process.env.DB_PASSWORD}`
const host = `${process.env.DB_HOST}`

export const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'mysql',
  models: [],
  logging: false
});