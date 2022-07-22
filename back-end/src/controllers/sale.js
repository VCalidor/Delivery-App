const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const saleService = require('../services/sale');

const create = async (req, res) => {
  try {
    const createdSale = await saleService.create(req.body);

    if (createdSale.err) return res.status(createdSale.code).json({ message: createdSale.err });

    return res.status(StatusCodes.CREATED).json(createdSale);
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
};

const changeStatus = async (req, res) => {
  try {
    const updatedSale = await saleService.changeStatus(req.params, req.body);

    if (updatedSale.err) return res.status(updatedSale.code).json({ message: updatedSale.err });

    return res.status(StatusCodes.OK).json(updatedSale);
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
    const foundSale = await saleService.findOne(id);

    if (foundSale.err) return res.status(foundSale.code).json({ message: foundSale.err });

    return res.status(StatusCodes.OK).json(foundSale);
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
};

const findAll = async (req, res) => {
  const { id, role } = req.user;

  const userOrSeller = role === 'customer' ? 'userId' : 'sellerId';

  try {
    const foundSales = await saleService.findAll(userOrSeller, id);

    return res.status(StatusCodes.OK).json(foundSales);
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
};

module.exports = {
  create,
  changeStatus,
  findOne,
  findAll,
};