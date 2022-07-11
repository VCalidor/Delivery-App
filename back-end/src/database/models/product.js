module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4,2),
    urlImage: DataTypes.STRING,
  }, { tablename: 'products', underscored: true });
  return product;
};