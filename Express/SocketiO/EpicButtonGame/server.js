const express = require("express");
const path = require("path");
const _PORT = 8000;
const bp = require("body-parser");

const app = express();
var server = app.listen(_PORT,() => {});
const io = require('socket.io').listen(server);

app.use(bp.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {res.render("index")});

io.sockets.on('connection', (socket) => {

    socket.on("counting_numbers", (data) =>{
        console.log("My counter is now at: " + data.myCounter);
        io.emit("server_response", {response: data.myCounter});
    });
  //all the socket code goes in here!
})


