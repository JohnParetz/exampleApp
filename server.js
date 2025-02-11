const { Pool } = require('pg');

const pool = new Pool({
    user: 'jmparet', 
    host: 'localhost',
    database: 'newapp_u3ga', 
    password: 'user4', 
    port: 5432,
});

const express = require('express');
const app = express();
const path = require('/.src/inventory/routes_v1'); // changed to routesv1

console.log(`Current directory: ${__dirname}`); 

const routesPath = path.join(__dirname, 'src', 'inventory', 'routes');
console.log(`Routes path: ${routesPath}`); 

try {
    const routes = require(routesPath);

    app.use(express.json());
    app.use('/', routes);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });

} catch (error) {
    console.error(`Error loading routes: ${error.message}`);
   
}

