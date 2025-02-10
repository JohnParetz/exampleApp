const Pool = require("pg").Poll;

const pool = new Pool({
user:"jmparet",
//host: "localhost", // might be not that
//password:"", // password requred
database: "inventory",
port: 5432,


});

module.exports = pool;
