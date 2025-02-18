
require('dotenv').config();
const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5000; 
const pool = require('./db.js'); // database connection db.js **** error here: Error: Cannot find module './db'

app.use(express.json());

// GET get info --------------
app.get('/api/potatoes', async (req, res) => {
    try {
        let query = 'SELECT * FROM potato_types';
        const where = []; 
        const values = []; 

        
        if (req.query.type) {  
            where.push('type = $1'); 
            values.push(req.query.type);
        }

        

        if (where.length) { 
            query += ' WHERE ' + where.join(' AND '); 
        }

        const result = await pool.query(query, values); 
        res.json(result.rows); 
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
});

// POST write info ----------------
app.post('/api/potatoes', async (req, res) => {
    try {
        const { type, color, size, origin } = req.body; 
        const result = await pool.query(
            'INSERT INTO potato_types (type, color, size, origin) VALUES ($1, $2, $3, $4) RETURNING *',
            [type, color, size, origin]
        );
        res.status(201).json(result.rows[0]); 
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
});

// PUT create new info by saving it with its id
app.put('/api/potatoes/:id', async (req, res) => {
    try {
        const { type, color, size, origin } = req.body;
        const { id } = req.params; 
        const result = await pool.query(
            'UPDATE potato_types SET type = $1, color = $2, size = $3, origin = $4 WHERE id = $5 RETURNING *',
            [type, color, size, origin, id] 
        );
        if (!result.rowCount) { 
            return res.status(404).json({ error: 'Potato not found' }); d
        }
        res.json(result.rows[0]); 
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));

