
var server = require('./server/Server')
var {MessageObj} = require('./server/utils/MessageObj')
console.log('welcome to Chat Server')



var app = server.app;
var ser = server.server;
var io = server.io;
io.on('connection',(socket)=>{
console.log('new user connected')
socket.broadcast.emit('newMessage',MessageObj('Admin','new User has joined'));
socket.emit('newMessage',MessageObj('Admin','Welcome To the chat app'));

socket.on('disconnect',(socket)=>{
    console.log('client disconnected')
});

socket.on('createMessage',(message,callback)=>{
console.log('createMessage --> ',message)
io.emit('newMessage',MessageObj(message.from,message.text));
callback({status:'200',ack:'RECEIVED'});
});


});


var PORT = process.env.PORT || 3000;

ser.listen(PORT,()=>{
    console.log(`Server Running at http//localhost:${PORT}`)
})
//server.app;