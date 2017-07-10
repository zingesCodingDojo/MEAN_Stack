
var express = require("express");

var path = require("path");

var session = require('express-session');

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: 'codingdojorocks'}));

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    
    res.render("index", {counter: req.session.name});
});

app.post("/surveyForm", function(req, res){
    res.render("results", {userInfo: req.body});
});


app.listen(8000, function() {
 console.log("listening on port 8000");
});
