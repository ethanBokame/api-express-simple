const express = require('express')
const app = express()
const UserRoutes = require("./routes/UserRoutes");

// middlewares
app.use(express.json());
app.use("/api/users", UserRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
