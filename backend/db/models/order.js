'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    buyerId: DataTypes.INTEGER,
    total: DataTypes.DECIMAL
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.User, { foreignKey:"buyerId" })
    Order.hasMany(models.OrderItem, { foreignKey:"orderId" })
  };
  return Order;
};
