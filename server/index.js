// server.js
const express = require("express");
const app = express();
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");

// Middleware
app.use(cors());
app.use(express.json());

// Use the todo routes
app.use("/", todoRoutes);

// Start the server
app.listen(5001, () => {
    console.log("The server is running on port 5001");
});
