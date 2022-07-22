const express = require('express');
const userController = require('../controllers/user');
const validators = require('../middlewares/validators');

const router = express.Router();

router.post('/', validators.registerOrEditUsers, userController.create);

module.exports = router;
