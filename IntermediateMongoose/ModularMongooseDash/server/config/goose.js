const goose = require("mongoose");
const fs = require("fs");
const path = require("path");
goose.connect("mongodb://localhost/modularizedHamsters");
const models_path = path.join(__dirname, "./../models");
fs.readdirSync(models_path).forEach((file) => {
    if(file.indexOf(".js") >= 0) {
        require(models_path + "/" + file);
    }
});