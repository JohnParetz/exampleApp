const express = require('express');
const app = express();
const path = require('path');
const pool = require('./db'); 

console.log(`Current directory: ${__dirname}`);

const routesV1Path = path.join(__dirname, 'src', 'inventory', 'routes_v1'); 
console.log(`Routes v1 path: ${routesV1Path}`);

try {
    const routesV1 = require(routesV1Path); 

    app.use(express.json());
    app.use('/api/v1', routesV1); 

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });

} catch (error) {
    console.error(`Error loading routes: ${error.message}`);
    
}