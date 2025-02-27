require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({ // db info, render
    user: process.env.DB_USER || "jmparet",
    host: process.env.DB_HOST || "dpg-cuh3hgpu0jms73fu27j0-a",
    database: process.env.DB_NAME || "newapp_u3ga",
    password: process.env.DB_PASSWORD || "QBI8WWH0EmyToU1ApTdDEgJvdiEUYlxq",
    port: process.env.DB_PORT || 5432,

});

pool.connect() 
    .then(() => console.log('DB connected')) // Log success
    .catch(err => console.error('DB error:', err)); // Log error *** got this error too could not connect to db***

module.exports = pool;