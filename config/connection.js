// *********************************************************************************
// SUBJECT TO CHANGE SO THAT SEQUELIZE CAN WORK ON HEROKU
// *********************************************************************************

//Sequelize set up
var Sequelize = require("sequelize");

//database name, user, password for mysql
<<<<<<< HEAD
const sequelize = new Sequelize("shopByYou_db", "root", "root", {
=======
const sequelize = new Sequelize("shopByYou_db", "root", "rootroot", {
>>>>>>> 14468619bd5171844f1ba803d540ef1a5d24ce2b
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