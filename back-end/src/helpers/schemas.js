const Joi = require('joi');

// USERS
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const createOrEditUsersSchema = Joi.object({
    email: Joi.string().email().required(),
    role: Joi.string().valid('administrator', 'seller', 'customer'),
    name: Joi.string().min(12).required(),
    password: Joi.string().min(6).required(),
});

// Products
const createOrEditProductsSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  urlImage: Joi.string().required(),
});

// Sales
const createSalesSchema = Joi.object({
  userId: Joi.number().required(),
  sellerId: Joi.number().required(),
  totalPrice: Joi.number().required(),
  deliveryAddress: Joi.string().required(),
  deliveryNumber: Joi.number().required(),
  productsArray: Joi.array().items(
    Joi.object(
      { quantity: Joi.number().required(), productId: Joi.number().required() },
      ).required(),
      ).required(),
});

const changeStatusSchema = Joi.object({
  status: Joi.string().valid('Pendente', 'Preparando', 'Em Trânsito', 'Entregue').required(),
});

module.exports = {
  loginSchema,
  createOrEditUsersSchema,
  createOrEditProductsSchema,
  createSalesSchema,
  changeStatusSchema,
}; 