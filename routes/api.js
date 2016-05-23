var express= require('express');
var router = express.Router();

//bring the model with the schema to the api
var Product= require('../models/products');

//register the methods accepted by the api and the routes where the api listen 
Product.methods(['get','put','post','delete']);
Product.register(router,'/products');


module.exports=router;
