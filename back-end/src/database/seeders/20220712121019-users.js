'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',
    [{
      id: 1,
      name: 'Percy Jackson',
      email: 'ladraoderaios@gmail.com',
      password: 'Poseidon',
      role: 'admin',
      created_at: new Date('2011-08-01T19:58:00.000Z'),
      updated_at: new Date('2011-08-01T19:58:00.000Z'),
    },
    {
      id: 2,
      name: 'Harry Potter',
      email: 'aquelequenaodevesernomeado@gmail.com',
      password: 'lordVoldemort123',
      role: 'seller',
      created_at: new Date('2011-08-01T19:58:00.000Z'),
      updated_at: new Date('2011-08-01T19:58:00.000Z'),
    },
    {
      id: 3,
      name: 'Kvothe',
      email: 'quesaudadedela@gmail.com',
      password: 'dennaVoltaPraMim',
      role: 'seller',
      created_at: new Date('2011-08-01T19:58:00.000Z'),
      updated_at: new Date('2011-08-01T19:58:00.000Z'),
    },
    {
      id: 4,
      name: 'Naruto Uzumaki', 
      email: 'euvouserohokagedafolha@gmail.com',
      password: 'datebayo',
      role: 'client',
      created_at: new Date('2011-08-01T19:58:00.000Z'),
      updated_at: new Date('2011-08-01T19:58:00.000Z'),
    },
    {
      id: 5,
      name: 'Lyra Belacqua',
      email: 'bussolaDeOuro@gmail.com',
      password: 'euAmoDaemons1995',
      role: 'client',
      created_at: new Date('2011-08-01T19:58:00.000Z'),
      updated_at: new Date('2011-08-01T19:58:00.000Z'),
    },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
