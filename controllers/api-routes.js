const db = require("../models")
const passport = require("../config/passport");

module.exports = function(app) {
    app.post("/api/login", passport.authenticate("local"), (req,res)=>{
        res.json(req.user);
    });

    app.post("/api/signup", (req,res)=>{
        db.User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password
        }).then(function(){
            res.redirect(307, "/api/login");
        }).catch(function(err){
            res.status(401).json(err);
        });
    });

    // do we need to add in logout?

    app.get("/api/user_data", function(req, res){
        if(!req.user){
            res.json({});
        } else {
            res.json({
                first_name: req.user.first_name,
                last_name: req.user.last_name,
                email: req.user.email,
                id: req.user.id
            });
        }
    });
}