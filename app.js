var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var config = require("./config/properties.json");
var objetoRouter = require("./route/objeto");
var tipoobjetoRouter = require("./route/tipoObjeto");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
     "PUT, POST, GET, DELETE, OPTIONS");
     next();
});

app.use('/api/objeto', objetoRouter);
app.use('/api/tipoobjeto', tipoobjetoRouter);




mongoose.connect(config.mongo_url, { useNewUrlParser: true })
.then(()=>{
    console.log("MongoDB successfully connected!");

    app.listen( config.port  || process.env.PORT , () => console.log(
        "Application is running under port " + config.port));

}).catch((err) => {
    console.log("Error connecting with MongoDB :-(");
    console.log(JSON.stringify(err));
})



