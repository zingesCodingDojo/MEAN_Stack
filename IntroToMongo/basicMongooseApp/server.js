const express = require("express");
const path = require("path");
const _PORT = 8000;
const bp = require("body-parser");
const goose = require("mongoose");
goose.connect('mongodb://localhost/basic_mongoose');
const app = express();

app.use(bp.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

const UserSchema = new goose.Schema({
    name: String,
    age: Number
});
goose.model("User", UserSchema);
const User = goose.model("User");
goose.Promise = global.Promise;

app.get("/", (req, res) => {
    User.find({}, (err, users) => {
        if(err){
            console.log("Found errors: " + err);
            res.render("index", {context: err});
        }
        else{
            let myUsers = users;
            res.render("index", {context: myUsers});
        }
    });
});

app.post("/users", (req, res) => {
    let newUser = new User({name: req.body.UserName, age: req.body.UserAge});
    newUser.save((err) => {
        if(err){
            console.log("Something went wrong.");
        }
        else{
            console.log("Successfully added a user!");
            res.render("AllUsers");
        }
    })
    res.redirect("/");
});

var server = app.listen(_PORT,() => {});
