const express = require("express");

const path = require("path");
const _PORT = 8000;
const app = express();

const bp = require("body-parser");

app.use(bp.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

const goose = require("mongoose");
goose.connect("mangodb://localhost/quotesdemo");
goose.Promise = global.Promise;

const QuoteSchema = new goose.Schema({
    quote: String,
    author: String
})

goose.model("Quote", QuoteSchema);
const Quote = goose.model("Quote");

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/process", (req, res) => {
    console.log("posting some stuff")
    let vals = req.body.quote.length === 0 || req.body.author.length === 0;
    if(vals){
        res.redirect("/");
    }
    else{
        let quote = {
            quote: req.body.quote,
            author: req.body.author
        };
        let newQuote = new Quote();
        newQuote.quote = quote.quote;
        newQuote.author = quote.author;
        newQuote.save((err)=>{
            console.log("There was an error.");
            res.redirect("/");
        });
        res.render("success");
    }
});

app.get("/showall", (req, res) =>{
    let stuff = Quote.find({}, (err, results) =>{
        if(err){
            console.log(err);
            return res.redirect("/");
        }
        else{
            let stuff = results;
            res.render("showall", stuff);
        }
    });
})

app.listen(_PORT,() => {
    console.log(`listening on ${_PORT}`);
})