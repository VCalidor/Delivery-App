module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define('sale', {
    userId: DataTypes.STRING,
    sellerId: DataTypes.STRING,
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATETIME,
    status: DataTypes.STRING,
  }, { tablename: 'sales' , underscored: true});

  sale.associate = (models) => {
    models.sale.belongsTo(models.user, {
      as: 'userId',
      foreignKey: "id"      
    })
    models.product.belongsTo(models.user, {
      as: 'sellerId',
      foreignKey: "id"
    })
  };
  return sale;
};