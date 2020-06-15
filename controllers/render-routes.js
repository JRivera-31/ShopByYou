const express = require("express")
const passport = require("../config/passport");

const router = express.Router()

router.get("/", (req, res) => {
    res.render("login")
})

router.get("/signup", (req, res) => {
    res.render("signup")
})

module.exports = router