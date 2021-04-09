const express = require("express");
const app = express();
const connectDB = require("./config/database")
const homeRoutes = require("./routes/home")
const todoRoutes = require("./routes/todos")

require("dotenv").config({path:"./config/.env"})

connectDB()


//const MongoClient = require("mongodb").MongoClient
//const PORT = 2121

//create the mongoDB connection
//let db,
    //dbConnectionStr = "mongodb+srv://lng:3xtAyKcPnZJH6RA@cluster0.cdpjo.mongodb.net/materias?retryWrites=true&w=majority";
    //dbName = "materias";
    
// MongoClient.connect(dbConnectionStr, {useUnifiedTopology : true})
//     .then(client => {
//         console.log(`Connected do ${dbName} Database`)
//         db = client.db(dbName)
//         // console.log(db)
//     }).catch(err => {
//         console.log(err)
//     })

//middleware - a
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use("/", homeRoutes)
app.use("/todos", todoRoutes)

//routing
// app.get("/", (request, response) => {
//     db.collection('todos').find().toArray()
//     .then(data => {
//         response.render("index.ejs",{info:data})
//     })
//     .catch(err => console.log(err))
// })

// app.post("/addQuote", (request, response) => {
//     db.collection('todos').insertOne(request.body)
//     .then(result => {
//         console.log('todos added', request.body)
//         response.redirect('/')
//     })
//     .catch(error => console.error(error))
// })

// app.delete("/deleteQuote" , (request,response) => {
//     console.log(request.body)
//     db.collection('todos').deleteOne({quote: request.body.quoteBody})
//     .then(result => {
//         console.log("Quote Deleted")
//         response.json("Quote Deleted")
//     })
//     .catch(err => console.log(err))
// })

app.listen(process.env.PORT, () => {
    console.log(`server running on http://localhost:${process.env.PORT}`)
})