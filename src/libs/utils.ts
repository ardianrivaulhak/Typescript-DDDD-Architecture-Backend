import dotenv from 'dotenv'

dotenv.config({
  path: `${__dirname}/../../.env`,
  override: true,
})

export const APP_HOST = process.env.APP_HOST || 'localhost'
export const APP_PORT = process.env.APP_PORT || '3000'
export const APP_URL_PREFIX = process.env.APP_URL_PREFIX || '/api/'
export const JWT_SECRET = process.env['JWT_SECRET'] || 'secret'
export const DB_CONFIG = {
  db_name: process.env['DB_NAME'] || 'db_local',
  db_user: process.env['DB_USER'] || 'root',
  db_password: process.env['DB_PASSWORD'] || 'root',
  config: {
    dialect: process.env['DB_DIALECT'] || 'mysql',
    port: process.env['DB_PORT'] || '3306',
  },
}
if (JWT_SECRET == 'secret') {
  console.log('No JWT secret string. Set JWT_SECRET environment variable.')
  process.exit(1)
}
