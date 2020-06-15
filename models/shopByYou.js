//StoreByYou model
module.exports = function(sequelize, DataTypes) {
  let Item = sequelize.define("Item", {
    // eslint-disable-next-line camelcase
    item_name: {
      type: DataTypes.STRING,
      allowNull: 0,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: 0
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: 0,
      validate: {
        isInt: true
      }
    },
    image: {
      type: DataTypes.BLOB("long")
    },
    description: {
      type: DataTypes.STRING,
      allowNull: 0
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: 0,
      validate: {
        isDecimal: true
      }
    }
  });
  return Item;
};

