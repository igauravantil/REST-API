const express = require('express');
const app  = express();
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

//middlewares
app.use('/',() => {
    console.log('this is a middleware')
})

//routes
app.get('/',(req,res) => {
    res.send('we are on home')
    
})

//how to we start listening to the server
app.listen(3000);