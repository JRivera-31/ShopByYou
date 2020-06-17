const express = require("express");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const router = express.Router();

// =======  Render Routes =======
router.get("/", (req, res) => {
  if (req.user) {
    return res.redirect("/shop");
  }
  res.render("login", {user: req.user});
});

router.get("/signup", (req, res) => {
  res.render("signup", {user: req.user});
});

router.get("/shop", (req, res) =>{

    res.render("shop", {user: req.user});
  
});

router.get("/category", (req, res) => {
  res.render("category", {user: req.user});
});

router.get("/favourite", (req, res) => {
  res.render("favourite", {user: req.user});
});

router.get("/cart", (req, res) => {
  res.render("cart", {user: req.user});
});

router.get("/sell", (req, res) => {
  res.render("sell", {user: req.user});
});


router.get("/logout", function (req, res) {
  
  req.logout();
  res.redirect("/");
});

module.exports = router;
