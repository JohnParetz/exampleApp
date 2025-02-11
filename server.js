console.log(__dirname);
const express = require('express');
const app = express();
const pool = require('./db');
const inventoryRoutes = require("./src/inventory/routes");

app.use(express.json());
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});