const goose = require("mongoose");
goose.connect("mongodb://localhost/loginRegistration");
const fs = require("fs");
const path = require("path");
const models_path = path.join(__dirname, "./../models");
fs.readdirSync(models_path).forEach((file) => {
    if(file.indexOf(".js") >= 0) {
        require(models_path + "/" + file);
    }
});