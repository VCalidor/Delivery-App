'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('salesProducts', {
      productId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'product_id',
        references: {
          model: 'products',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      saleId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'sale_id',
        references: {
          model: 'sales',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('salesProducts');
  }
};
