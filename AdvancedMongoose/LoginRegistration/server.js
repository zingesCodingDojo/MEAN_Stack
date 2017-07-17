require("./server/config/goose.js");
const express = require("express");
const _PORT = 8000;
const path = require("path");
const bp = require("body-parser");
const bcrypt = require("bcrypt");
const app = express();

// bcrypt.hashSync(password, bcrypt.genSaltSync(8));
// bcrypt.compareSync(password, this.password);
app.use(bp.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./client/static")));

app.set("views", path.join(__dirname, "./client/views"));
app.set("view engine", "ejs");

const routes_setter = require("./server/config/routes.js");
routes_setter(app);


const server = app.listen(_PORT, () => {});