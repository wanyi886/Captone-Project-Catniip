'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Orders', [
    {
      buyerId:1,
      total: 137.8,
    },
    {
      buyerId:1,
      total: 167.39,
    },
    {
      buyerId:1,
      total: 125.5,
    }

  ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Orders', null, {});

  }
};
