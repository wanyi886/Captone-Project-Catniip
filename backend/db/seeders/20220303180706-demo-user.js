'use strict';

const bcrypt = require('bcryptjs')

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-WanYi',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user3@gmail.com',
        username: 'FakeUser3',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'pudding@gmail.com',
        username: 'Pudding',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'mason33333@gmail.com',
        username: 'Mason Wu',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'julia999@gmail.com',
        username: 'Juliaaaaaa',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'stone@gmail.com',
        username: 'Stone',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'poojaB@gmail.com',
        username: 'Pooja Biradar',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'gaugau555999@gmail.com',
        username: 'Gauraav',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'elainewang090644@gmail.com',
        username: 'Elaine W',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'spoirier@yahoo.com',
        username: 'Sebastien P',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'piewdepie@yahoo.com',
        username: 'mrPie',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'jasonpark12345@yahoo.com',
        username: 'Jason Park',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'makotok@yahoo.com',
        username: 'Makoto Kawai',
        hashedPassword: bcrypt.hashSync('password')
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-WanYi', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
