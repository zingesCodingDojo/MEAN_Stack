const goose = require("mongoose");
const User = goose.model("../models/user.js");
module.exports = {
    create: (req, res) => {
        let newUser = new User({
            first_name: req.body.FirstName,
            last_name: req.body.LastName,
            email: req.body.Email,
            password: req.body.Password,
            confirm_password: req.body.PasswordConfirm,
            birthday: req.body.Birthday
        });
        if(confirmPassword(newUser.first_name, newUser.last_name) == false){
            console.log("Passwords do not match.");
            res.render("index", {context: "Passwords do not match."});
        }
        if(validateBirthday(newUser.birthday) == false){
            console.log("Birthday cannot be from the future!");
            res.render("index", {context: "Passwords do not match."});
        }
        newUser.save((errors) => {
            if(errors){
                console.log("Unable to create user.");
                res.render("index", {context: errrors.errors});
            }
            else{
                console.log(`Horray! We created ${newUser.first_name} ${newUser.last_name}`);
                res.redirect("/successRoute");
            }
        });
    },
    loggedUser: (req, res) => {
        User.find({_id: req.params.id}, (error, myUser) => {
            if(error){
                console.log("There was an error when trying to find the user.", error);
            }
            else{
                res.render("success", {myUser});
            }
        });
    }
};

function confirmPassword(Password, ConfirmPassword){
    if(Password != ConfirmPassword){
        return false;
    }
    return true;
};

function validateBirthday(birthday){
    if(birthday > new Date()){
        return false;
    }
    return true;
};