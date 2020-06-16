const express = require("express")
const passport = require("../config/passport");

const router = express.Router()

// =======  Render Routes =======
router.get("/", (req, res) => {
    res.render("login")
})

router.get("/signup", (req, res) => {
    res.render("signup")
})

router.get("/user-shop", (req, res) => {
    res.render("user_shop")
})

router.get("/category", (req, res) => {
    res.render("category")
})

router.get("/favourite", (req, res) => {
    res.render("favourite")
})

router.get("/guest-shop", (req, res) => {
    res.render("guest_shop")
})

router.get("/cart", (req, res) => {
    res.render("cart")
})

router.get("/sell", (req, res) => {
    res.render("sell")
})

module.exports = router