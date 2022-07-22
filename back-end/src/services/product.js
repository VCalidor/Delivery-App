const { StatusCodes } = require('http-status-codes');
const { product } = require('../database/models');

const findAll = async () => {
  const foundProduct = await product.findAll();

  return foundProduct;
};

const findOne = async (id) => {
  const ERROR_MESSAGE = 'Product does not exist';
  const foundProduct = await product.findByPk(id);

  if (!foundProduct) return { err: ERROR_MESSAGE, code: StatusCodes.NOT_FOUND };

  return foundProduct;
};

const create = async ({ name, price, urlImage }) => {
  const ERROR_MESSAGE = 'Product already exists';
  const [createdProduct, wasCreated] = await product.findOrCreate({ 
    where: { name }, defaults: { name, price, urlImage } });

  if (!wasCreated) return { err: ERROR_MESSAGE, code: StatusCodes.CONFLICT };

  return createdProduct;
};

module.exports = {
  findAll,
  findOne,
  create,
};