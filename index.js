const express = require('express');

const passport = require('./config/passport-jwt-Strategy');

const db = require('./config/mongoose');

const port = process.env.PORT || 8000;

const app = express();

app.use(express.urlencoded());

app.use(express.json());

app.use(passport.initialize());

app.use('/',require('./routes/api/index'));

app.listen(port,function(err){
    if(err){
        console.log("Error while listening", err);
    }
    else{
        console.log("Listening!!!");
    }

})