var server = require('./server/Server')
console.log('welcome to Chat Server')

var app = server.app;

var PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server Running at http//localhost:${PORT}`)
})
server.app;