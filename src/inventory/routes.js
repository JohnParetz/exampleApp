const express = require("express");
const inventoryRoutes = require("./src/inventory/routes");

const app = express();
app.use(express.json());

app.use("/inventory", inventoryRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
