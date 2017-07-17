const goose = require("mongoose");

const userSchema = new goose.Schema({
    email: { type: String, required: true, minlength: 2, unique: true},
    name: { type: String, required: true, maxlength: 20},
    lastname: { type: String, required: true, maxlength: 20},
    password: { type: String, required: true, maxlength: 100},
    birthday: { type: String},
}, {timestamp: true}
);
goose.model("User", userSchema);
const User = goose.model("User");