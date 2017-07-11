
var express = require( "express");
var path = require( "path");

var session = require('express-session');

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: 'codingdojorocks'}));

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
 res.render("index");
})

var server = app.listen(8000, function() {
    console.log( "listening on port 8000");
})
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    console.log("WE ARE USING SOCKETS!");
    console.log(socket.id);
    socket.on("posting_form", function(data){
        console.log("Someone clicked a button! Reason: " + data.formInfo.Name);
        
        socket.emit("server_response", {response: data.formInfo});
    });
  //all the socket code goes in here!
})




