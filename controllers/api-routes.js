const db = require("../models");
const passport = require("../config/passport.js");
const multer = require("multer");
// env
require("dotenv").config();

// Google cloud storage
// const MulterGoogleCloudStorage = require("multer-google-storage")
// var multerGoogleStorage = require("multer-cloud-storage");
let storage = require("./storage");
const uploadHandler = multer({ storage: storage });

//Init upload
// const uploadHandler = multer({
//     storage: multerGoogleStorage.storageEngine()
// })
console.log(process.env.GCS_BUCKET);
module.exports = function (app) {
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json(req.user);
  });

<<<<<<< HEAD
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
    app.get("/api/items", function(req, res) {
        db.Item.findAll({}).then(function(dbItem) {
            res.json(dbItem);
        });
    });
    //get all items from specific categories
    app.get("api/categories", function(req, res) {
        db.Item.findAll({
            where: {
                category: req.params.category
            }
        }).then(function(dbItem) {
            res.json(dbItem);
        });
    })

    //adding item to sell in app
    app.post("/api/items", (req, res) => {
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
    // app.put("/api/items", function(req, res) {
    //     db.Item.updateOne({
    //         item_name: req.body.item_name,
    //         quantity: req.body.quantity,
    //         //placeholder for image
    //         price: req.body.price
    //     }).then(function (dbItem) {
    //         res.json(dbItem);
    //     }).catch(function(err) {
    //         res.status(401).json(err);
    //     });
    // });

    //remove item from cart
    app.delete("/api/items/:id", function(req, res) {
        db.Item.destroy({
            where: {id: req.params.id}
        }).then(function(dbItem) {
            res.json(dbItem);
        });
    });
}
=======
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id,
      });
    }
  });
  app.post("/api/sellitem", uploadHandler.single("file"), (req, res) => {
    console.log(req.file);
    const itemDetails = JSON.parse(req.body.item);
    itemDetails.image = req.file.filename;
    console.log(itemDetails);
    db.Item.create(itemDetails)
      .then(() => res.status(200))
      .catch((err) => {
        console.log(err);
        res.status(401).json(err);
      });
  });

  // app.post("/uploads", uploadHandler.single("userImg"), (req, res) => {
  //     console.log(req.files)
  //     res.json(req.files)
  // })
};
>>>>>>> 2482869a9f4e608402e5078afda3856049ad3aae
