console.log(__dirname) 

const express = require('express');
const app = express();
const routes = require('./src/inventory/routes');

app.use(express.json()); 
app.use('/', routes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});