const express = require("express");
const _PORT = 8000;
const path = require("path");
const bp = require("body-parser");
const app = express();

app.use(bp.urlencoded({extended: true}));
app.use(bp.json()); 

require("./server/config/goose.js");

const routes_setter = require("./server/config/routes.js");

routes_setter(app);


const server = app.listen(_PORT, () => {});