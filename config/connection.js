//Sequelize set up
var Sequelize = require("sequelize");

//database name, user, password for mysql
var sequelize = new Sequelize("storyByYou_db", "root", "root", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});