const express = require('express')
const app = express()
const UserRoutes = require("./routes/UserRoutes");

// middlewares
app.use(express.cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies for all routes
app.use("/api/users", UserRoutes); // Use the user routes for /api/users endpoint

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
