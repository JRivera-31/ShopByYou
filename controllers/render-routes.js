const express = require("express")
const passport = require("../config/passport");

const router = express.Router()

router.get("/", (req, res) => {
    res.render("login")
})

module.exports = router