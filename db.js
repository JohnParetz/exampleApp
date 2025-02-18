require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_jmparet,
    host: process.env.dpg-DB_dpg-cuh3hgpu0jms73fu27j0-a,
    database: process.env.DB_newapp_u3ga,
    password: process.env.DB_QBI8WWH0EmyToU1ApTdDEgJvdiEUYlxq,
    port: process.env.db.DB_5432,
});

pool.connect()
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Database connection error:', err));

module.exports = pool;
