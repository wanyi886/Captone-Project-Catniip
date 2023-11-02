'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    title:DataTypes.STRING(255),
    description: DataTypes.STRING(500),
    imgUrl: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Product, { foreignKey: "productId" })
    Review.belongsTo(models.User, { foreignKey: "userId" })
  };
  return Review;
};
