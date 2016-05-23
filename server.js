var express = require('express');
var mongoose=require('mongoose');
var bodyparser= require('body-parser');
mongoose.connect('mongodb://localhost/rest_test');

var app=express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());


app.use('/api', require('./routes/api'));//anything on this route goes to /routes.api

app.listen(2525);
console.log('appi running');

//libraries to use: express, mongoose, node restful, body parser-> needed with express 4, used as middlewaare
//nodemon: keep node running and refreshing anytime there is a change
