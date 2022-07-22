const md5 = require('md5');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const { StatusCodes } = require('http-status-codes');
const fs = require('fs');
const { user } = require('../database/models');

const login = async ({ email, password }) => {
  const ERROR_MESSAGE = 'Incorrect email or password';
  const foundUser = await user.findOne({ where: { email } });

  if (!foundUser) return { code: StatusCodes.NOT_FOUND, err: ERROR_MESSAGE };

  const correctPassword = md5(password) === foundUser.password;
  
  if (!correctPassword) return { code: StatusCodes.UNAUTHORIZED, err: ERROR_MESSAGE };
  
  const { id, role, name } = foundUser;
  const secret = fs.readFileSync('jwt.evaluation.key', 'utf-8');
  const token = jwt.sign(
    { id, role, name, email }, secret, { expiresIn: '7d', algorithm: 'HS256' },
  );
  return { user: { id, role, name, email }, token };
};

const create = async ({ name, email, password, role = 'customer' }) => {
  const ERROR_MESSAGE = 'Email or name already registered';
  const foundUser = await user.findOne({
    where: {
      [Op.or]: [
        { name },
        { email },
      ],
    },
  });

  if (foundUser) return { err: ERROR_MESSAGE, code: StatusCodes.CONFLICT };

  const encryptedPass = md5(password);

  const createdUser = await user.create({
    name, email, password: encryptedPass, role,
  });

  return createdUser;
};

const findAll = async () => {
  const foundUsers = await user.findAll(
    { attributes: { exclude: ['updatedAt', 'createdAt', 'password'] } },
);

  const filteredUsers = { sellers: [], customers: [], administrators: [] };

  foundUsers.forEach((u) => {
    filteredUsers[`${u.role}s`] = [...filteredUsers[`${u.role}s`], u];
  });

  return filteredUsers;
};
const deleteUser = async (id) => {
  const ERROR_MESSAGE = 'User not found';
  const SUCCESS_MESSAGE = 'User deleted successfully';
  const foundUser = await user.destroy({ where: { id } });

  if (foundUser === 0) return { code: StatusCodes.NOT_FOUND, err: ERROR_MESSAGE };

  return { message: SUCCESS_MESSAGE };
};

module.exports = { login, create, deleteUser, findAll };