const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const UserRoutes = require("./routes/UserRoutes");

// middlewares
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies for all routes
app.use("/api/users", UserRoutes); // Use the user routes for /api/users endpoint

app.listen(port, () => { 
    console.log(`Server is running on port ${port}`);
})
