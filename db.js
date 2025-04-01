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
        required: true,
    },
});

const connectWithTimeout = async () => {
    const timeout = 5000;
    const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Database connection timeout')), timeout)
    );

    try {
        await Promise.race([pool.connect(), timeoutPromise]);
        console.log('DB connected successfully');

        const result = await pool.query('SELECT 1');
        console.log('Database test query successful:', result.rows);
    } catch (err) {
        console.error('DB connection error:', err);
        console.error('DB connection error details:', err.message, err.stack);
    }
};

connectWithTimeout();

module.exports = pool;