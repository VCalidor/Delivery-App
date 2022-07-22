module.exports = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('salesProduct', {
    saleId: { type: DataTypes.INTEGER, field: 'sale_id' },
    productId:{ type: DataTypes.INTEGER, field: 'product_id' },
    quantity: DataTypes.INTEGER,
    createdAt: { type: DataTypes.DATE, field: 'created_at' },
    updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
  }, { tablename: 'salesProducts', timestamps: true })
  
  salesProduct.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      as: 'products',
      foreignKey: 'saleId',
      otherKey: 'productId',
      through: salesProduct
    })
    models.product.belongsToMany(models.sale, {
      as: 'sales',
      foreignKey: 'productId',
      otherKey: 'saleId',
      through: salesProduct
    })
  }  
  return salesProduct;
};
