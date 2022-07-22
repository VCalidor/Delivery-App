const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const {
  loginSchema,
  createOrEditUsersSchema,
  createOrEditProductsSchema,
  createSalesSchema,
  changeStatusSchema,
} = require('../helpers/schemas');

const login = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(StatusCodes.BAD_REQUEST).json({ message: error.details[0].message });

  next();
};

const registerOrEditUsers = (req, res, next) => {
  const { error } = createOrEditUsersSchema.validate(req.body);
  if (error) return res.status(StatusCodes.BAD_REQUEST).json({ message: error.details[0].message });

  next();
};

const createOrEditProduct = (req, res, next) => {
  const ERROR_MESSAGE = 'Customers cannot change the status of an order';
  const { role } = req.user;
  const { error } = createOrEditProductsSchema.validate(req.body);
  if (error) return res.status(StatusCodes.BAD_REQUEST).json({ message: error.details[0].message });

  if (role === 'customer') {
    return res.status(StatusCodes.FORBIDDEN).json({ message: ERROR_MESSAGE });
  }

  next();
};

const createSales = (req, res, next) => {
  const { error } = createSalesSchema.validate(req.body);
  if (error) return res.status(StatusCodes.BAD_REQUEST).json({ message: error.details[0].message });

  next();
};

const changeStatus = (req, res, next) => {
  const { error } = changeStatusSchema.validate(req.body);

  if (error) return res.status(StatusCodes.BAD_REQUEST).json({ message: error.details[0].message });

  next();
};

const adminRights = (req, res, next) => {
  const { role } = req.user;

  if (role !== 'administrator') { 
    return res.status(StatusCodes.FORBIDDEN).json({ message: ReasonPhrases.FORBIDDEN });
  }

  next();
};

module.exports = {
  login,
  registerOrEditUsers,
  createOrEditProduct,
  createSales,
  changeStatus,
  adminRights,
}; 