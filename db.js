require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    
    user: process.env.DB_USER || "jmparet",
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME || "newapp_u3ga",
    password: process.env.DB_PASSWORD || "user4",
    port: process.env.DB_PORT || 5432,


});
pool.connect()
    .then(() => console.log('Database connected successfully!')) 
    .catch(err => {
        console.error('Database connection error:', err); 
       
        console.error('Connection string:', pool.options.connectionString);
    });



module.exports = pool;