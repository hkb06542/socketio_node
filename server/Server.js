const path = require('path')
var http = require('http')

const express = require('express')
var socketIO = require('socket.io')


var app = express();
var server = http.createServer(app)
var io = socketIO(server)

//acessing public directory
var PublicPath = path.join(__dirname,'../public')
app.use( express.static(PublicPath)  );


module.exports = {
    app,
    server,
    io
}