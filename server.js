//express
const express = require("express");
const session = require("express-session")
const app = express();
const passport = require("./config/passport.js")
// Path and multer for image uploading
const path = require("path")

//port
const PORT = process.env.PORT || 8080;
// app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/public"));

//handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//using sessions to track user's login status
app.use(session({ secret: process.env.SESSION_SECRET || "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// routes
const renderRoutes = require("./controllers/render-routes.js");
app.use(renderRoutes);
const apiRoutes = require("./controllers/api-routes.js");
apiRoutes(app);

//syncing models
const db = require("./models");
const e = require("express");


//Syncing sequelize models and then starting express server
db.sequelize.sync({force:true}).then(function() {
  app.listen(PORT, function() {
    console.log("🚀 App listening on PORT " + PORT);
  });
});

