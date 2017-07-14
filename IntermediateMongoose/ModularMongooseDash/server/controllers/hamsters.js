const goose = require("mongoose");
const Hamster = goose.model("Hamster");
module.exports = {
    show: (req, res) => {
        Hamster.find({}, (err, myHammy) => {
            if(err){
                console.log("Something went wrong when trying to find all hamsters!");
                res.render("index", {context: err});
            }
            else{
                res.render("index", {context: myHammy});
            }
        }); 
    },

    singularHammy: (req, res) => {
        Hamster.find({_id: req.params.id}, (err, singleHammy) =>{
            if(err){
                console.log("Something went wrong.", err);
                res.redirect("/");
            }
            else{
                res.render("singleHammy", {singleHammy});
            }
        });
    },

    create: (req, res) => {
        let newHammy = new Hamster({
            name: req.body.HamsterName,
            age: req.body.HamsterAge,
            description: req.body.HamsterDescription,
            image: req.body.HamsterImage
        });
        newHammy.save((err) => {
            if(err){
                console.log("Failed to create new Hamster!");
                res.render("newHammy", {errors: newHammy.errors});
            }
            else{
                console.log("Added a new hammy!");
            }
        });
        res.redirect("/");
    },

    update: (req, res) => {
        let query = {_id: req.params.id};
        let update = {name: req.body.HamsterName, age: req.body.HamsterAge, description: req.body.HamsterDescription, image: req.body.HamsterImage};
        let options = {new: true};
        Hamster.findOneAndUpdate(query, update, options, ((err, data) => {
            if(err){
                console.log("We got an error!");
            }
        }));
        res.redirect("/hamster/:id");
    },

    removeHammy: (req, res) => {
        Hamster.findByIdAndRemove(req.params.id, (err, data) => {
            if(err){
                console.log("COuld not delete!")
            }
        })
        res.redirect("/");
    }
};