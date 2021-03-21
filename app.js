const express = require('express');
require('dotenv').config()
const app  = express();
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var cors = require('cors')
const posts = require("./routes/posts")

mongoose.connect(process.env.Database, 
{useNewUrlParser: true,  
    useUnifiedTopology: true,
    useCreateIndex : true
}).then(console.log("DB CONNECTED"));

//middlewares
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended : true}))
app.use(cookieParser())
app.use(cors())


//routes
app.use('/api',posts);

//how to we start  listening to the server
app.listen(process.env.port,()=>{
    console.log(`app is running at ${process.env.port}`)
});