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
    //get all items
    app.get("/api/item", function(req, res) {
        db.Item.findAll({}).then(function(dbItem) {
            res.json(dbItem);
        })
    })

    //adding item to sell in app
    app.post("/api/item", (req, res) => {
        db.Item.create({
            item_name: req.body.item_name,
            category: req.body.category,
            quantity: req.body.quantity,
            //placeholder for image
            description: req.body.description,
            price: req.body.price
        }).then(function (dbItem) {
            res.json(dbItem);
        }).catch(function(err) {
            res.status(401).json(err);
        })
    });

    //move item to cart
    app.put("/api/item", function(req, res) {
        db.Item.updateOne({
            item_name: req.body.item_name,
            quantity: req.body.quantity,
            //placeholder for image
            price: req.body.price
        }).then(function (dbItem) {
            res.json(dbItem);
        }).catch(function(err) {
            res.status(401).json(err);
        });
    });
    //remove item from cart
    app.delete("/api/item/:id", function(req, res) {
        db.Item.destroy({
            where: {id: req.params.id}
        }).then(function(dbItem) {
            res.json(dbItem);
        });
    });
}