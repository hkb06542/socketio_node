const path = require('path')
const express = require('express')

var app = express();

//acessing public directory
var PublicPath = path.join(__dirname,'../public')
app.use( express.static(PublicPath)  );


module.exports = {
    app
}