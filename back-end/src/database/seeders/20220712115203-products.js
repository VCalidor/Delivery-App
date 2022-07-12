'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products',
      [{
        id: 1,
        name: 'Vodka Smirnoff',
        price: 27.99,
        url_image: 'https://m.media-amazon.com/images/I/71rjD3WLv0L._AC_SY606_.jpg',
        created_at: new Date('2011-08-01T19:58:00.000Z'),
        updated_at: new Date('2011-08-01T19:58:00.000Z'),
      },
      {
        id: 2,
        name: 'Cerveja Amanteigada',
        price: 23,
        url_image: 'https://m.media-amazon.com/images/I/519FrjeZdpL._AC_SX679_.jpg@gmail.com',
        created_at: new Date('2011-08-01T19:58:00.000Z'),
        updated_at: new Date('2011-08-01T19:58:00.000Z'),
      },
      {
        id: 3,
        name: 'Tubaína',
        price: 14.37,
        url_image: 'https://m.media-amazon.com/images/I/71wpxHsz7GL._AC_SX466_.jpg',
        created_at: new Date('2011-08-01T19:58:00.000Z'),
        updated_at: new Date('2011-08-01T19:58:00.000Z'),

      },
      {
        id: 4,
        name: 'Energético Monster',
        price: 18.50,
        url_image: 'https://m.media-amazon.com/images/I/81LsDCA5l0L._AC_SY679_.jpg',
        created_at: new Date('2011-08-01T19:58:00.000Z'),
        updated_at: new Date('2011-08-01T19:58:00.000Z'),
      },
      ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
