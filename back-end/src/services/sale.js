const { StatusCodes } = require('http-status-codes');
const { sale, product, salesProduct } = require('../database/models');

const create = async ({ 
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, productsArray }) => {
    const allProducts = await product.findAll();
    const allProductsIds = allProducts.map((p) => p.id);

    const bool = productsArray.every(({ productId }) => allProductsIds.includes(productId));

    if (!bool) return { code: StatusCodes.NOT_FOUND, err: 'Products do not exist' };

    const createdSale = await sale.create({ userId,
      sellerId, 
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      saleDate: Date.now(),
      status: 'Pendente',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

  await Promise.all(productsArray.map((p) => salesProduct
    .create({ productId: p.productId, saleId: createdSale.id, quantity: p.quantity })));

  return createdSale;
};

const changeStatus = async ({ id }, { status }) => {
  const ERROR_MESSAGE = 'Sale does not exist';
  let foundSale = await sale.findByPk(id);

  if (!foundSale) return { err: ERROR_MESSAGE, code: StatusCodes.NOT_FOUND };

  foundSale.status = status;

  foundSale = await foundSale.save();

  return foundSale;
};

const findOne = async (id) => {
  const ERROR_MESSAGE = 'Sale does not exist';
  const foundSale = await sale.findOne({
    where: { id },
    attributes: { exclude: ['updatedAt', 'createdAt'] },
    include: [{ model: product, as: 'products', through: { attributes: ['quantity'] } }],
  });

  if (!foundSale) return { err: ERROR_MESSAGE, code: StatusCodes.NOT_FOUND };

  return foundSale;
};

const findAll = async (role, id) => {
  const sales = await sale.findAll({
    where: { [role]: id },
    attributes: { exclude: ['updatedAt', 'createdAt'] },
    include: [{ model: product, as: 'products', through: { attributes: [] } }],
  });

  return sales;
};

module.exports = {
  create,
  changeStatus,
  findOne,
  findAll,
};  