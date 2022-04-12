'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('OrderItems', [
    {
      orderId:1,
      productId:1,
      quantity:1,
      subtotal:87.9,
    },
    {
      orderId:1,
      productId:9,
      quantity:1,
      subtotal:49.9,
    },
    {
      orderId:2,
      productId:12,
      quantity:2,
      subtotal:11.8,
    },
    {
      orderId:2,
      productId:13,
      quantity:4,
      subtotal:35.6,
    },
    {
      orderId:2,
      productId:5,
      quantity:1,
      subtotal:119.99,
    },
    {
      orderId:3,
      productId:7,
      quantity:1,
      subtotal:125.5,
    },

  ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('OrderItems', null, {});

  }
};
