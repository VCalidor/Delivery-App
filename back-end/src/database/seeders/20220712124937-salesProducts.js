'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('salesProducts',
      [
        {
          product_id: 2,
          sale_id: 1,
          quantity: 2,
          created_at: new Date('2011-08-01T19:58:00.000Z'),
          updated_at: new Date('2011-08-01T19:58:00.000Z'),
        },
        {
          product_id: 4,
          sale_id: 2,
          quantity: 5,
          created_at: new Date('2011-08-01T19:58:00.000Z'),
          updated_at: new Date('2011-08-01T19:58:00.000Z'),
        },
        {
          product_id: 1,
          sale_id: 3,
          quantity: 1,
          created_at: new Date('2011-08-01T19:58:00.000Z'),
          updated_at: new Date('2011-08-01T19:58:00.000Z'),
        },
        {
          product_id: 3,
          sale_id: 4,
          quantity: 4,
          created_at: new Date('2011-08-01T19:58:00.000Z'),
          updated_at: new Date('2011-08-01T19:58:00.000Z'),
        },
        {
          product_id: 3,
          sale_id: 2,
          quantity: 1,
          created_at: new Date('2011-08-01T19:58:00.000Z'),
          updated_at: new Date('2011-08-01T19:58:00.000Z'),
        },
      ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('salesProducts', null, {});
  }
};
