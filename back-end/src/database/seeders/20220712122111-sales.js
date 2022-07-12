'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales',
      [{
        id: 1,
        user_id: 4,
        seller_id: 2,
        total_price: 46, // 2 Cervejas amanteigadas
        delivery_address: 'Hogwarts',
        delivery_number: 'Platform 9 3/4',
        sale_date: new Date('2011-08-01T19:58:00.000Z'),
        status: 'PENDENTE',
        created_at: new Date('2011-08-01T19:58:00.000Z'),
        updated_at: new Date('2011-08-01T19:58:00.000Z'),
      },
      {
        id: 2,
        user_id: 5,
        seller_id: 3,
        total_price: 92.5, // 5 Monsters
        delivery_address: 'Casa da Coulter',
        delivery_number: '123456',
        sale_date: new Date('2011-08-01T19:58:00.000Z'),
        status: 'PREPARANDO',
        created_at: new Date('2011-08-01T19:58:00.000Z'),
        updated_at: new Date('2011-08-01T19:58:00.000Z'),
      },
      {
        id: 3,
        user_id: 5,
        seller_id: 2,
        total_price: 27.99, // 1 Smirnoff
        delivery_address: 'Vila da folha',
        delivery_number: '654321',
        sale_date: new Date('2011-08-01T19:58:00.000Z'),
        status: 'ENTREGUE',
        created_at: new Date('2011-08-01T19:58:00.000Z'),
        updated_at: new Date('2011-08-01T19:58:00.000Z'),
      },
      {
        id: 4,
        user_id: 4,
        seller_id: 3, 
        total_price: 80.48, // 4 Tubaínas & 1 Cerveja amanteigada
        delivery_address: 'Caravana Cigana',
        delivery_number: '981254',
        sale_date: new Date('2011-08-01T19:58:00.000Z'),
        status: 'PREPARANDO',
        created_at: new Date('2011-08-01T19:58:00.000Z'),
        updated_at: new Date('2011-08-01T19:58:00.000Z'),
      },
      ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
