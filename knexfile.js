// Update with your config settings.
require('dotenv').config();
const localPg = {
  host: 'localhost',
  database: 'notes',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
};
const dbConnection = process.env.DATABASE_URL || localPg;
const dbEngine = process.env.DB || 'development';
const config = require('../knexfile.js')[dbEngine];

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/db.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: dbConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'notes',
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};
