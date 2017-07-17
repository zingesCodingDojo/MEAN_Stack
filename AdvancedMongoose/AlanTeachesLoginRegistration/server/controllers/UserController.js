const goose = require("mongoose");
const User = goose.model("User");
module.exports = {
    create: (req, res) => {
        let newUser = new User({
            email: req.body.email,
            name: req.body.first_name,
            lastname: req.body.last_name,
            password: req.body.password,
            birthday: req.body.age
        });
        newUser.save((err) => {
            if(err){
                console.log("We received errors!", err);
                return res.render("index", {err});
            }
            else{
                console.log("We are creating a new user!");
                return res.redirect("/");
            }
        });
    },
    login: (req, res) => {
        if(req.body.email == "" || req.body.password == ""){
            console.log("blank fields...");
            return res.redirect("/");
        }
        User.findOne({email: req.body.email}, (err, singleUser) => {
            console.log("User typed in : " + req.body.email + " And password typed: " + req.body.password);
            console.log("Actual user password is: " + singleUser.password);
            if(err){
                console.log("User was not found.");
                return res.render("index", {err});
            }
            if(req.body.password != "" && req.body.password == singleUser.password){
                return res.redirect("/success");                
            }
            else{
                console.log("Bad password");
                return res.render("index", {err});
            }
        })
    }
};