const db = require("../models")
const passport = require("../config/passport");

module.exports = function (app) {
    app.get("/", (req, res) => {
        res.render("index")
    })
}