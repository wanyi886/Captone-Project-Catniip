'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    type: DataTypes.STRING,
    sellerId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    detail: DataTypes.TEXT,
    description: DataTypes.TEXT,
    imgUrl: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    inventory: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsTo(models.User, { foreignKey:"sellerId" })
    Product.hasMany(models.OrderItem, { foreignKey: "productId" })
    Product.hasMany(models.Review, { foreignKey: "productId", onDelete: 'CASCADE', hooks: true })
  };
  return Product;
};
