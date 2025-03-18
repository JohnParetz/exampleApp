require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const pool = require('./db');
const path = require('path');

app.use(express.json());


app.use(express.static(path.join(__dirname, '')));


app.get('/api/recipes', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM potato_recipes');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/recipes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM potato_recipes WHERE recipe_id = $1', [id]);
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

app.post('/api/recipes', async (req, res) => {
    try {
        const { recipe_name, ingredients, instructions, prep_time, cook_time, serving_size } = req.body;
        const result = await pool.query(
            'INSERT INTO potato_recipes (recipe_name, ingredients, instructions, prep_time, cook_time, serving_size) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [recipe_name, ingredients, instructions, prep_time, cook_time, serving_size]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.put('/api/recipes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { recipe_name, ingredients, instructions, prep_time, cook_time, serving_size } = req.body;
        const result = await pool.query(
            'UPDATE potato_recipes SET recipe_name = $1, ingredients = $2, instructions = $3, prep_time = $4, cook_time = $5, serving_size = $6 WHERE recipe_id = $7 RETURNING *',
            [recipe_name, ingredients, instructions, prep_time, cook_time, serving_size, id]
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

app.delete('/api/recipes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM potato_recipes WHERE recipe_id = $1 RETURNING *', [id]);
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