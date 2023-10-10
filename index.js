const express= require('express');
const mongoose =require('mongoose');
const db=require('./config/db');
const bodyParser = require("body-parser");
const taskRoutes= require('./routes/TaskRoutes')
const app=express();
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(taskRoutes)
app.listen(3001,()=>console.log("serveur express a démarré")) 