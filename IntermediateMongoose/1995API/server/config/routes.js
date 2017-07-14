const oldpeep = require("./../controllers/oldPeeps.js");
module.exports = (app) => {
    app.get("/", (req, res) => {
        oldpeep.show(req, res);
    });
    app.get("/:name", (req, res) => {
        oldpeep.name(req, res);
    });
    app.get("/new/:name", (req, res) => {
        oldpeep.create(req, res);
    });
    app.get("/remove/:name", (req, res) => {
        oldpeep.remove(req, res);
    });
}