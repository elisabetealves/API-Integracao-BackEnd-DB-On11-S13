const express = require("express")
const app = express()

// conectar o mongo com o mongoose 
const db = require("./data/database")
db.connect()

app.use(express.json())

const index = require("./routes/index")
const movies = require("./routes/moviesRoutes")

app.use("/", index)
app.use("/movies",  movies)

module.exports = app
