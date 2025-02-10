const express = require('express');
const inventoryRoutes = require("./src/inventory/routes");

const app = express();
const port = 3000;

app.use(express.json())

const cors = require("cors");
app.use(cors({
    oringin: '*'
}

))

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// API routes
// httpm://localhost:3000//exampleProduct
app.use("/api/v1/inventory", inventoryRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});