//StoreByYou model
module.exports = function(sequelize, DataTypes) {
  var Store = sequelize.define("Store", {
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
      allowNull: 0
    },
    description: {
      type: DataTypes.STRING,
      allowNull: 0
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: 0
    }
  });
  return Store;
};

