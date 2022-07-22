const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const userService = require('../services/user');

const login = async (req, res) => {
  try {
    const loggedUser = await userService.login(req.body);

    if (loggedUser.err) return res.status(loggedUser.code).json({ message: loggedUser.err });

    return res.status(StatusCodes.OK).json(loggedUser);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
};

const create = async (req, res) => {
  try {
    const createdUser = await userService.create(req.body);

    if (createdUser.err) return res.status(createdUser.code).json({ message: createdUser.err });

    return res.status(StatusCodes.CREATED).json(createdUser);
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
};

const findAll = async (req, res) => {
  const { role } = req.user;
  try {
    const foundUsers = await userService.findAll();

    if (role !== 'administrator') return res.status(StatusCodes.OK).json(foundUsers.sellers);
    return res.status(StatusCodes.OK).json(foundUsers);
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await userService.deleteUser(id);

    if (deletedUser.err) return res.status(deletedUser.code).json({ message: deletedUser.err });

    return res.status(StatusCodes.OK).json(deletedUser);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
};

module.exports = { login, create, deleteUser, findAll };