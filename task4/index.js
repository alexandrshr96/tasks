let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname + '/public')); 

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000);