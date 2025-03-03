require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const pool = require('./db');

app.use(express.json());

// GET all potatoes
app.get('/api/potatoes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM potato_types');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET potato by ID
app.get('/api/potatoes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM potato_types WHERE potato_id = $1', [id]);

    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: 'Potato not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST write info ----------------
app.post('/api/potatoes', async (req, res) => {
  try {
    const { type_name, description, best_uses, starch_level, skin_color, flesh_color } = req.body;

    const result = await pool.query(
      'INSERT INTO potato_types (type_name, description, best_uses, starch_level, skin_color, flesh_color) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [type_name, description, best_uses, starch_level, skin_color, flesh_color]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/// PUT create new info by saving it with its id
app.put('/api/potatoes/:id', async (req, res) => {
  try {
    const { type_name, description, best_uses, starch_level, skin_color, flesh_color } = req.body;
    const { id } = req.params;
    const result = await pool.query(
      'UPDATE potato_types SET type_name = $1, description = $2, best_uses = $3, starch_level = $4, skin_color = $5, flesh_color = $6 WHERE potato_id = $7 RETURNING *',
      [type_name, description, best_uses, starch_level, skin_color, flesh_color, id]
    );
    if (!result.rowCount) {
      return res.status(404).json({ error: 'Potato not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));