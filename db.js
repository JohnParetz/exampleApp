require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER || "jmparet",
    host: process.env.DB_HOST || "dpg-cvcal7hc1ekc73ep60p0-a.ohio-postgres.render.com",
    database: process.env.DB_NAME || "recipe_qqe5",
    password: process.env.DB_PASSWORD || "4m2a1h1ECI1pUooD1mah8XFYrnQvCVMI",
    port: process.env.DB_PORT || 5432,
    ssl: {
        rejectUnauthorized: false,
    },
});

pool.connect()
    .then(() => console.log('DB connected'))
    .catch(err => console.error('DB error:', err));

module.exports = pool;