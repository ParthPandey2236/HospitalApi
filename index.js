const express = require('express');

const passport = require('./config/passport-jwt-Strategy');

const db = require('./config/mongoose');
//imported necessary files and executed config files

const port = process.env.PORT || 8000;
//specified a port number

const app = express();

app.use(express.urlencoded());
//urlencoded to decode the data send by forms

app.use(express.json());
// json to decode the data send in form of json

app.use(passport.initialize());
//initialized passport

app.use('/',require('./routes/api/index'));
//create routing for api

app.listen(port,function(err){
    if(err){
        console.log("Error while listening", err);
    }
    else{
        console.log("Listening!!!");
    }

});
//executed listen function