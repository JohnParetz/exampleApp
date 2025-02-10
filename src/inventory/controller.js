const pool = require('../db');
const { getInventory } = require('./queries');
const queries = require('./quiries');

// get all data
const getInventory = (req, res) => {
    pool.query(queries.getInventory,(error, results)=>
    {if(error)throw error;
        res.status(200).json(results.rows);
    }
    );
    };

    //get data by param
    // add new data by param
    // mod data by param
    module.exports = {getInventory, };
