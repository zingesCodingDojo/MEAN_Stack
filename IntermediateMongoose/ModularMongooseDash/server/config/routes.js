const hamster = require("../controllers/hamsters.js");
module.exports = (app) => {
    app.get("/", (req, res) => {
        hamster.show(req, res);
    });

    app.get("/hamster/new", (req, res) => {
        res.render("newHammy");
    });

    app.get("/hamster/:id", (req, res) => {
        hamster.singularHammy(req, res);
    });

    app.post("/hamster", (req, res) => {
        hamster.create(req, res);
    });

    app.get("/cancel", (req, res) => {
        return res.redirect("/");
    });

    app.post("/hamster/edit/:id", (req, res) => {
        hamster.update(req, res);
    });

    app.get("/deleteHamster/:id", (req, res) => {
        hamster.removeHammy(req, res);
    });
};