const goose = require("mongoose");
const OldPeep = goose.model("OldPeep");
module.exports = {
    show: (req, res) => {
        OldPeep.find({}, (err, myOldPeep) => {
            if(err){
                console.log("Something went wrong when trying to find all hamsters!");
            }
            else{
                res.json(myOldPeep);
            }
        });
    },
    name: (req, res) => {
        OldPeep.find({name: req.params.name}, (err, myOldPeep) => {
            if(err || myOldPeep.length < 1){
                console.log("No old guy named " + req.params.id);
                res.redirect("/");
            }
            else{
                res.json(myOldPeep);
            }
        });
    },
    create: (req, res) => {
        let newOldPeep = new OldPeep({
            name: req.params.name
        })
        newOldPeep.save((err) => {
            if(err){
                console.log("Failed to create new Old Person!");
            }
            else{
                console.log("Added a new old fart!");
            }
        });
        res.redirect("/");
    },
    remove: (req, res) => {
        OldPeep.findOneAndRemove(req.params.name, (err, data) => {
            if(err){
                console.log("Could not delete the OLD GUY!");
            }
        });
        res.redirect("/");
    }
};