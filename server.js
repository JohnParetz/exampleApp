require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());



// Get all recipes
app.get('/api/recipes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM recipe_data');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get recipe ID
app.get('/api/recipes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM recipe_data WHERE recipe_id = $1', [id]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: 'Recipe not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a recipe
app.post('/api/recipes', async (req, res) => {
  try {
    const { recipe_name, ingredients, instructions } = req.body;
    const result = await pool.query(
      'INSERT INTO recipe_data (recipe_name, ingredients, instructions) VALUES ($1, $2, $3) RETURNING *',
      [recipe_name, ingredients, instructions]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Save recipe
app.put('/api/recipes/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { recipe_name, ingredients, instructions } = req.body;
      const result = await pool.query(
        'UPDATE recipe_data SET recipe_name = $1, ingredients = $2, instructions = $3 WHERE recipe_id = $4 RETURNING *',
        [recipe_name, ingredients, instructions, id]
      );
      if (result.rowCount > 0) {
        res.json(result.rows[0]);
      } else {
        res.status(404).json({ error: 'Recipe not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Delete a recipe
app.delete('/api/recipes/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const result = await pool.query('DELETE FROM recipe_data WHERE recipe_id = $1 RETURNING *', [id]);
      if (result.rowCount > 0) {
        res.json({ message: 'Recipe deleted successfully' });
      } else {
        res.status(404).json({ error: 'Recipe not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});