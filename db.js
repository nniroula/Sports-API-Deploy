const { Client } = require('pg');

let DB_URI;

const isProduction = process.env.NODE_ENV === 'production'

DB_URI = "postgresql:///aecc_db";

let db = new Client({
    connectionString: isProduction ? process.env.DATABASE_URL : DB_URI,
    // ssl: isProduction,
});

db.connect();

module.exports = db;