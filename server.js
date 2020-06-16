//express
const express = require("express");
const session = require("express-session")
const app = express();
const passport = require("./config/passport.js")
// Path and multer for image uploading
const path = require("path")
const multer = require("multer")

// Init upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
      checkFileType(file, cb)
  } 
}).single("userImg")

// Check file type helper
const checkFileType = (file, cb) => {
  // Allowed exts
  const filetypes = /jpeg|jpg|png|gif/
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  // Check mime 
  const mimetype = filetypes.test(file.mimetype)

  if (mimetype && extname) {
      return cb(null, true)
  } else {
      cb("Error: Images only!")
  }
}

//port
const PORT = process.env.PORT || 8080;
// app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//using sessions to track user's login status
app.use(session({ secret: process.env.SESSION_SECRET || "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// routes
const routes = require("./controllers/render-routes.js");
app.use(routes);

//syncing models
const db = require("./models");


//Syncing sequelize models and then starting express server
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});