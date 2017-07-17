const user = require("../controllers/UserController.js");

module.exports = (app) => {
    app.get("/", (req, res) => {
        return res.render("index");
    });

    app.post("/createUser", (req, res) => {
        user.create(req, res);
    });

    app.get("/success", (req, res) => {
        return res.render("success");
    });

    app.post("/loginUser", (req, res) => {
        user.login(req, res);
    })
};