const express = require('express')
const app = express()
const db = require("./conn");
const UserRoutes = require("./routes/UserRoutes");

// middleware
app.use(express.json());
app.use("/api/users", UserRoutes);

app.listen(3000)
