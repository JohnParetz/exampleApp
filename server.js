require('dotenv').config(); // If using .env for local
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const pool = require('./db');

app.use(express.json());

// Example GET route (adapt as needed)
app.get('/api/potatoes', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM potato_types');
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching potatoes:", error);
        res.status(500).json({ error: "Failed to fetch potatoes" });
    }
});

// Example POST route (adapt as needed)
app.post('/api/potatoes', async (req, res) => {
    // ... (Your POST route logic)
});


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
