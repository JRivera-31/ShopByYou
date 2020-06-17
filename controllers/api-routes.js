const db = require("../models")
const passport = require("../config/passport.js");

module.exports = function(app) {
    app.post("/api/login", passport.authenticate("local"), (req,res) => {
        res.json(req.user);
    });

    app.post("/api/signup", (req,res) => {
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(function(){
            res.redirect(307, "/api/login");
        }).catch(function(err){
            res.status(401).json(err);
        });
    });

  

    app.get("/api/user_data", (req, res) => {
        if(!req.user){
            res.json({});
        } else {
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });

    app.post("/api/sellitem", (req, res) => {
        db.Item.insertOne({
            item_name: req.body.item_name,
            category: req.body.category,
            quantity: req.body.quantity,
            description: req.body.description,
            price: req.body.price
        }).then(function (dbItem) {
            res.json(dbItem);
        }).catch(function(err) {
            res.json(err);
        })
    })
}