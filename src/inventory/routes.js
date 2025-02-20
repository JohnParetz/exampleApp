
const express = require('express');
const router = express.Router();
const pool = require('./db'); 

router.get('/potatoes', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM potato_types'); 

        
        res.json(result.rows); 

        

    } catch (error) {
        console.error("Error fetching potatoes:", error);
        res.status(500).json({ error: "Failed to fetch potatoes" }); 
    }
});

module.exports = router;