const express = require('express');
const userController = require('../controllers/user');
const authMiddleware = require('../middlewares/authMiddleware');
const validators = require('../middlewares/validators');

const router = express.Router();

router.post(
  '/',
  authMiddleware,
  validators.adminRights,
  validators.registerOrEditUsers,
  userController.create,
);

router.get('/', authMiddleware, validators.adminRights, userController.findAll);

router.get('/sellers', authMiddleware, userController.findAll);

router.delete('/:id', authMiddleware, validators.adminRights, userController.deleteUser);

module.exports = router;
