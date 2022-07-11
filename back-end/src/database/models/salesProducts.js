module.exports = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('salesProduct', {
    salesId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, { tablename: 'salesProducts' , underscored: true })
  
  salesProduct.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      as: 'products',
      foreignKey: 'productId',
      otherKey: 'saleId',
      through: 'salesProduct'
    })
    models.product.belongsToMany(models.sale, {
      as: 'sales',
      foreignKey: 'saleId',
      otherKey: 'productId',
      through: 'salesProduct'
    })
  }  
  return salesProduct;
};
