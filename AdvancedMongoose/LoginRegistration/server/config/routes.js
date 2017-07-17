const users = require("../controllers/users.js");
module.exports = (app) => {
    app.get("/", (req, res) =>{
        res.render("index");
    });
    app.post("/createUser", (req, res) => {
        users.create(req, res);
    })
    app.get("/successRoute", (req, res) => {
        users.loggedUser(req, res);
    })
    app.get("/back", (req, res) => {
        res.redirect("/");
    })
};