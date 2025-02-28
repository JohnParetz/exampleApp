require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER || "jmparet",
    host: process.env.DB_HOST || "dpg-cuh3hgpu0jms73fu27j0-a.ohio-postgres.render.com",
    database: process.env.DB_NAME || "newapp_u3ga",
    password: process.env.DB_PASSWORD || "QBI8WWH0EmyToU1ApTdDEgJvdiEUYlxq",
    port: process.env.DB_PORT || 5432,
    ssl: {
        rejectUnauthorized: false,
    },
});

pool.connect()
    .then(() => console.log('DB connected'))
    .catch(err => console.error('DB error:', err));

module.exports = pool;