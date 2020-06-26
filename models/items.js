//StoreByYou model
module.exports = function(sequelize, DataTypes) {
  let Item = sequelize.define("Item", {
    // eslint-disable-next-line camelcase
    item_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
       allowNull: false
    },
    quantity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    }
  });
  return Item;
};

