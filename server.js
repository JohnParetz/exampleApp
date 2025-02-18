require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
console.log("Current directory:", __dirname);
console.log("Checking db.js exists:", require('fs').existsSync('./db.js'));

const pool = require('./db.js');

app.use(express.json());

// Routes
app.get('/api/potatoes', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM potato_types');
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching potatoes:", error);
        res.status(500).json({ error: "Failed to fetch potatoes" });
    }
});



app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});