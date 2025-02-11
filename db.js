
const Pool = require("pg").Pool;


    const pool = new Pool({
        user: "jmparet",
        host: "localhost", 
        database: "inventory",
        password: "user4",
        port: 5432,
    });
    

module.exports = pool;
