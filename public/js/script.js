var socket =  io();
socket.on('connect',()=>{
    console.log('Connected to server')

    socket.emit('createMessage',{
        from:'Bosco',
        text:'Wow WOw'
    })

}).on('disconnect',()=>{
    console.log('server Disconnected Snaggy pussy')
})
socket.on('newMessage',function(message){
  console.log('newMessage', message)
})