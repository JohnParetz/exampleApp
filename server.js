require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const app = express();
const pool = require('./db');
const path = require('path');
const fs = require('fs');
const selfsigned = require('selfsigned');

app.use(express.json());
app.use(helmet());
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

app.get('/api/search', async (req, res) => {
    try {
        const { query } = req.query;
        const result = await pool.query(
            'SELECT * FROM potato_recipes WHERE recipe_name ILIKE $1 OR ingredients ILIKE $1 OR instructions ILIKE $1',
            [`%${query}%`]
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


const attrs = [{ name: 'commonName', value: 'localhost' }];
const pems = selfsigned.generate(attrs, { days: 365 });

// HTTPS server
try {
    const httpsOptions = {
        key: pems.private, // private key
        cert: pems.certificate,
    };
    app.listen(httpsOptions, () => {
        console.log(`HTTPS server is running on port ${process.env.HTTPS_PORT || 443}`);
    });
} catch (err) {
    console.error('Error starting HTTPS server:', err);
}