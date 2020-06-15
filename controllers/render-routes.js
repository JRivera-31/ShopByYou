const express = require("express")
const passport = require("../config/passport");

const router = express.Router()

router.get("/", (req, res) => {
    res.render("login")
})

router.get("/signup", (req, res) => {
    res.render("signup")
})

router.get("/user-shop", (req, res) => {
    res.render("user_shop")
})

module.exports = router