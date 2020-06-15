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
//routes
var routes = require("./controllers/");
app.use(routes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});