
var server = require('./server/Server')
console.log('welcome to Chat Server')



var app = server.app;
var ser = server.server;
var io = server.io;
io.on('connection',(socket)=>{
console.log('new user connected')
socket.on('disconnect',(socket)=>{
    console.log('client disconnected')
})
});


var PORT = process.env.PORT || 3000;

ser.listen(PORT,()=>{
    console.log(`Server Running at http//localhost:${PORT}`)
})
//server.app;