const express = require("express")
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const router = express.Router()

// =======  Render Routes =======
router.get("/", (req, res) => {
        res.render("login")
    if (req.user) {
        res.redirect("/member-shop");
      }
})

router.get("/signup", (req, res) => {
    res.render("signup")
})

router.get("/member-shop", (req, res) => {
    if (req.user){
    res.render("member_shop")
  } else {
    res.render("guest_shop")
  }
})

router.get("/category", (req, res) => {
    res.render("category")
})

router.get("/favourite", (req, res) => {
    res.render("favourite")
})

router.get("/cart", (req, res) => {
    res.render("cart")
})

router.get("/sell", (req, res) => {
    res.render("sell")
})

app.get("/member-shop", isAuthenticated, function(req, res) {
    res.render("member_shop");
});

module.exports = router