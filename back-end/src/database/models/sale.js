module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define('sale', {
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
  }, { tablename: 'sales', timestamps: true, underscored: true});

  sale.associate = (models) => {
    models.sale.belongsTo(models.user, {
      as: 'user_id',
      foreignKey: "id"
    })
    models.product.belongsTo(models.user, {
      as: 'seller_id',
      foreignKey: "id"
    })
  };
  return sale;
};