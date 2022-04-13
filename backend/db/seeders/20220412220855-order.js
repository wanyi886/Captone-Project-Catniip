'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Orders', [
    {
      buyerId:1,
      total: 137.8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      buyerId:1,
      total: 167.39,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      buyerId:1,
      total: 125.5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

  ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Orders', null, {});

  }
};
