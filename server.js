//express
var express = require("express");
var app = express();
//port
var PORT = process.env.PORT || 8080;
// app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//handlebars 
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//using sessions to track user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//routes
var routes = require("./controllers/");
app.use(routes);
//syncing models
var db = require('./models');


//Syncing sequelize models and then starting express server
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

