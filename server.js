const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const pool = require('./db'); // Import your database connection

app.use(express.json()); // To parse JSON request bodies (for POST)

app.get('/api/potatoes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM potato_types');
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching potatoes:", error);
    res.status(500).json({ error: "Failed to fetch potatoes" }); // Send error response
  }
});

app.post('/api/potatoes', async (req, res) => {
  const { type_name, description, best_uses, starch_level, skin_color, flesh_color } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO potato_types (type_name, description, best_uses, starch_level, skin_color, flesh_color) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [type_name, description, best_uses, starch_level, skin_color, flesh_color]
    );
    res.status(201).json(result.rows[0]); // 201 Created, send back the created potato
  } catch (error) {
    console.error("Error creating potato:", error);
    res.status(500).json({ error: "Failed to create potato" });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});