
var server = require('./server/Server')
console.log('welcome to Chat Server')



var app = server.app;
var ser = server.server;
var io = server.io;
io.on('connection',(socket)=>{
console.log('new user connected')

// socket.emit('newMessage',{
//     from:'hkb@gmail.com',
//     text:'Momgol pati sex',
//     createdAt: new Date().getMilliseconds()
// });

socket.on('disconnect',(socket)=>{
    console.log('client disconnected')
});

socket.on('createMessage',(message)=>{
console.log('createMessage --> ',message)
});

socket.emit('newMessage',{
      from:'Hemu',
      text:'how re you',
      createdAt: new Date()
  }
);

});


var PORT = process.env.PORT || 3000;

ser.listen(PORT,()=>{
    console.log(`Server Running at http//localhost:${PORT}`)
})
//server.app;