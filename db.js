
const Pool = require("pg").Pool;


    const pool = new Pool({
        user: "jmparet",
        host: "localhost", 
        database: "newapp_u3ga",
        password: "user4",
        port: 5432,
    });
    pool.connect()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Database error:', err));

module.exports = pool;
