const express = require("express");
const path = require("path");
const _PORT = 8000;
const bp = require("body-parser");
const goose = require("mongoose");
const app = express();
goose.connect("mongodb://localhost/hammyDashboard")

app.use(bp.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

const HamsterSchema = new goose.Schema({
    name: {type: String, required: true, minlength: 2},
    age: {type: Number, required: true},
    description: {type: String, required: true, minlength: 10},
    image: {type: String, required: true}
}, {timestamps: true});
goose.model("Hamster", HamsterSchema);
const Hamster = goose.model("Hamster");
goose.Promise = global.Promise;

app.get("/", (req, res) => {
    Hamster.find({}, (err, myHammy) => {
        if(err){
            console.log("Something went wrong.");
            return res.render("index", {context: err});
        }
        else{
            let allHamster = myHammy;
            return res.render("index", {context: allHamster});
        }
    })
});

app.get("/hamster/new", (req, res) => {res.render("newHammy");});

app.get("/hamster/:id", (req, res) => {
    Hamster.find({_id: req.params.id}, (err, singleHammy) =>{
        if(err){
            console.log("Something went wrong.", err);
            // if not single hammy
            return res.redirect("/");
        }
        else{
            return res.render("singleHammy", {singleHammy});
        }
    });
});

app.post("/hamster", (req, res) => {
    let newHammy = new Hamster({
        name: req.body.HamsterName,
        age: req.body.HamsterAge,
        description: req.body.HamsterDescription,
        image: req.body.HamsterImage
    });
    newHammy.save((err) => {
        if(err){
            console.log("Something went wrong.")
            return res.render("newHammy", {errors: newHammy.errors});
        }
        else{
            console.log("Added a new hammy!");
        }
    });
    return res.redirect("/");
});

app.get("/cancel", (req, res) => {
    return res.redirect("/");
});

app.post("/hamster/edit/:id", (req, res) => {
    // Hamster.update({_id: req.params.id}, {$set: {
    //     name: req.body.HamsterName,
    //     age: req.body.HamsterAge,
    //     description: req.body.HamsterDescription,
    //     image: req.body.HamsterImage
    // }});
    let query = {_id: req.params.id};
    let update = {name: req.body.HamsterName, age: req.body.HamsterAge, description: req.body.HamsterDescription, image: req.body.HamsterImage};
    let options = {new: true};
    Hamster.findOneAndUpdate(query, update, options, ((err, data) => {
        if(err){
            console.log("We got an error!");
        }
    }));
    return res.redirect("/hamster/:id");
});

app.get("/deleteHamster/:id", (req, res) => {
    Hamster.findByIdAndRemove(req.params.id, (err, data) => {
        if(err){
            console.log("COuld not delete!")
        }
    })
    res.redirect("/");
})

const server = app.listen(_PORT, () => {});