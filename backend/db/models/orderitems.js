'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    subtotal: DataTypes.DECIMAL
  }, {});
  OrderItem.associate = function(models) {
    // associations can be defined here
    OrderItem.belongsTo(models.Order, { foreignKey:"orderId" })
    OrderItem.belongsTo(models.Product, { foreignKey:"productId" })
  };
  return OrderItem;
};
