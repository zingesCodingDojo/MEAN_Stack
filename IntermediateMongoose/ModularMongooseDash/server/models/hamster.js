var goose = require("mongoose");
const HamsterSchema = new goose.Schema({
    name: {type: String, required: true, minlength: 2},
    age: {type: Number, required: true},
    description: {type: String, required: true, minlength: 10},
    image: {type: String, required: true}
    }, 
    {timestamps: true}
);
goose.model("Hamster", HamsterSchema);
const Hamster = goose.model("Hamster")