const express = require("express")
const passport = require("../config/passport");

const router = express.Router()

// =======  Render Routes =======
router.get("/", (req, res) => {
    res.render("login")
}).catch(err => res.status(404))

router.get("/signup", (req, res) => {
    res.render("signup")
}).catch(err => res.status(404))

router.get("/user-shop", (req, res) => {
    res.render("user_shop")
}).catch(err => res.status(404))

router.get("/category", (req, res) => {
    res.render("category")
}).catch(err => res.status(404))

router.get("/favourite", (req, res) => {
    res.render("favourite")
}).catch(err => res.status(404))

router.get("/guest-shop", (req, res) => {
    res.render("guest_shop")
}).catch(err => res.status(404))

router.get("/cart", (req, res) => {
    res.render("cart")
}).catch(err => res.status(404))

router.get("/sell", (req, res) => {
    res.render("sell")
}).catch(err => res.status(404))

module.exports = router