var socket =  io();
socket.on('connect',function(){
    console.log('Connected to server')
    
    // socket.emit('createMessage',{
    //     from:'Admin',
    //     text:'Welcome to Secret chat'
    // },function(data){
    //     console.log('Got It Pussy !',data)
    // });

}).on('disconnect',function(){
    console.log('server Disconnected Snaggy pussy')
})
socket.on('newMessage',function(message){
  console.log('newMessage', message)
  var li = $('<li></li>');
  li.text(`${message.from}: ${message.text}`)
  $('#messages').append(li)
})

$('#message_form').on('submit',function(e){
  e.preventDefault();
  socket.emit('createMessage',{
    from:'Bosco',
    text: $('[name=message]').val()
},function(data){
    console.log('Got It Pussy !',data)
});
})
