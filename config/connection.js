// *********************************************************************************
// SUBJECT TO CHANGE SO THAT SEQUELIZE CAN WORK ON HEROKU
// *********************************************************************************

//Sequelize set up
var Sequelize = require("sequelize");

//database name, user, password for mysql
<<<<<<< HEAD
const sequelize = new Sequelize("shopByYou_db", "root", "rootroot", {
=======
const sequelize = new Sequelize("shopByYou_db", "root", "sprinkles", {
>>>>>>> 4f9bff0b01ef8a481bf25ab64cb693f552d78999
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;