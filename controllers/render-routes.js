const express = require("express");
const passport = require("../config/passport");
const router = express.Router();
const db = require("../models");

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
  db.Item.findAll({}).then(items => {
    res.render("shop", {"items": items, "user": req.user})
  })
});

router.get("/category", (req, res) => {
  res.render("category", { user: req.user }); 
});

router.get("/categories/:category", (req, res) => {
  db.Item.findAll({
    where: {
      category: req.params.category
    }
  }).then(items => {
    res.render("category", { items: items });
  });
});

router.get("/sell", (req, res) => {
  res.render("sell", { user: req.user });
});

router.get("/logout", function (req, res) { 
  req.logout();
  res.redirect("/");
});

module.exports = router;
