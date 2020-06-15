//StoreByYou model
module.exports = function(sequelize, DataTypes) {
  var Store = sequelize.define("Store", {
    // eslint-disable-next-line camelcase
    item_name: {
      type: DataTypes.STRING,
<<<<<<< HEAD
      allowNull: 0
=======
      allowNull: 0,
>>>>>>> 6725ddfd1ef5db21f1b7e3b59c7944df214ba5fe
    },
    category: {
      type: DataTypes.STRING,
      allowNull: 0
    },
    quantity: {
      type: DataTypes.INTEGER,
<<<<<<< HEAD
      allowNull: 0,
      validate: {
        isInt: true
      }
=======
      allowNull: 0
>>>>>>> 6725ddfd1ef5db21f1b7e3b59c7944df214ba5fe
    },
    description: {
      type: DataTypes.STRING,
      allowNull: 0
    },
    price: {
      type: DataTypes.DECIMAL,
<<<<<<< HEAD
      allowNull: 0,
      validate: {
        isDecimal: true
      }
=======
      allowNull: 0
>>>>>>> 6725ddfd1ef5db21f1b7e3b59c7944df214ba5fe
    }
  });
  return Store;
};

