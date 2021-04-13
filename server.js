const express = require("express");
const app = express();
const connectDB = require("./config/database")
const homeRoutes = require("./routes/home")
const todoRoutes = require("./routes/todos")
const apiRoutes = require("./routes/api")

require("dotenv").config({path:"./config/.env"})

connectDB()

//middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json())

//routing system
app.use("/", homeRoutes)
app.use("/todos", todoRoutes)
app.use("/api", apiRoutes)

app.listen(process.env.PORT, () => {
    console.log(`server running on http://localhost:${process.env.PORT}`)
})