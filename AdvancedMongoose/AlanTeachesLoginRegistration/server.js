const express = require("express");
const path = require("path");
const bp = require("body-parser");

const app = express();
app.use(bp.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./client/static")));

app.set("views", path.join(__dirname, "./client/views"))
app.set("view engine", "ejs");

//models need go here
require("./server/config/mongoose.js");

//routes need go here
const routes_setter = require("./server/config/routes.js");
routes_setter(app);


app.listen(8000, () => {
    console.log("Yo, we in like flynn");
})
