var app=require('express')();
var http=require('http').createServer(app);
var io=require('socket.io')(http);


app.get('/',function(req,res){
// res.send('<h1>hello</h1>');
res.send("<h1>hello</h1>");
});

app.get('/hello',function(req,res){
    res.sendFile(__dirname+'/index.htm');
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      console.log('message: ' + msg);
      io.emit('chat message',msg);
    });
  });

http.listen(3000,function(){
console.log('listening on 3000')
});