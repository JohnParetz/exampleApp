require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    user: "jmparet", //jmparet
    host: "dpg-cuh3hgpu0jms73fu27j0-a", //localhost
    database: "newapp_u3ga", //newapp_u3ga
    password: "QBI8WWH0EmyToU1ApTdDEgJvdiEUYlxq",  //user4
    port: 5432, //5432

});

console.log("Connection details:", pool.options); 

pool.connect() 
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Database connection error:', err));


module.exports = pool;