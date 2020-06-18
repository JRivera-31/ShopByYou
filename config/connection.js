// *********************************************************************************
// SUBJECT TO CHANGE SO THAT SEQUELIZE CAN WORK ON HEROKU
// *********************************************************************************

//Sequelize set up
var Sequelize = require("sequelize");

//database name, user, password for mysql
const sequelize = new Sequelize("shopByYou_db", "root", "sprinkles", {
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