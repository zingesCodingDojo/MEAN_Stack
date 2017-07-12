const express = require("express");
const path = require("path");
const _PORT = 8000;
const bp = require("body-parser");
const goose = require("mongoose");
const app = express();
goose.connect("mongodb://localhost/quoting_dojo");

app.use(bp.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

const QuotingSchema = new goose.Schema({
    name: {type: String, required: true, minlength: 2},
    quote: {type: String, required: true, minlength: 10},
    created_at: Date
});
goose.model("Quote", QuotingSchema);
const Quote = goose.model("Quote");
goose.Promise = global.Promise;

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/addQuote", (req, res) => {
    let newQuote = new Quote({
        name: req.body.UserName,
        quote: req.body.UserQuote,
        created_at: new Date()
    });
    newQuote.save((err)=>{
        if(err){
            res.render("index", {errors: newQuote.errors});
        }
        else{
           console.log("Added a quote!") 
        }
    });
    res.redirect("/quotes");
});

app.get("/skip", (req, res) => {
    res.redirect("/quotes");
});

app.get("/quotes", (req, res) =>{
    Quote.find({}, (err, myQuotes) => {
        if(err){
            console.log("Something went wrong");
            res.render("quotes", {context: err});
        }
        else{
            let trueQuote = myQuotes;
            res.render("quotes", {context: trueQuote});
        }
    })
});

const server = app.listen(_PORT, () => {});