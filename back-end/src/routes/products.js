const express = require('express');
const productController = require('../controllers/product');
const validators = require('../middlewares/validators');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', productController.findAll);

router.get('/:id', productController.findOne);

router.post('/', authMiddleware, validators.createOrEditProduct, productController.create);

module.exports = router;
