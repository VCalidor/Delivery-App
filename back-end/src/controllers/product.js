const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const productService = require('../services/product');

const findAll = async (_req, res) => {
  try {
    const foundUsers = await productService.findAll();

    return res.status(StatusCodes.OK).json(foundUsers);
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
};

const findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const foundUser = await productService.findOne(id);

    if (foundUser.err) return res.status(foundUser.code).json({ message: foundUser.err });

    return res.status(StatusCodes.OK).json(foundUser);
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
};

const create = async (req, res) => {
  try {
    const createdProduct = await productService.create(req.body);

    if (createdProduct.err) {
      return res.status(createdProduct.code).json({ message: createdProduct.err });
    }

    return res.status(StatusCodes.CREATED).json(createdProduct);
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
};

module.exports = {
  findAll,
  findOne,
  create,
};