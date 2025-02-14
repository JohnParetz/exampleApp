// db.js
const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL || `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`; // For local

const pool = new Pool({
    connectionString: connectionString,
});

pool.connect()
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Database error:', err));

module.exports = pool;