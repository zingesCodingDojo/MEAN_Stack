const goose = require("mongoose");
const OldPeepSchema = new goose.Schema({
    name: { type: String }},
    { timestamps: true }
);
goose.model("OldPeep", OldPeepSchema);
const OldPeep = goose.model("OldPeep");