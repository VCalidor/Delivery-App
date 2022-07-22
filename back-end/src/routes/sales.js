const express = require('express');
const saleController = require('../controllers/sale');
const authMiddleware = require('../middlewares/authMiddleware');
const validators = require('../middlewares/validators');

const router = express.Router();

router.get('/', authMiddleware, saleController.findAll);

router.get('/:id', saleController.findOne);

router.patch('/:id', authMiddleware, validators.changeStatus, saleController.changeStatus);

router.post('/', authMiddleware, validators.createSales, saleController.create);

module.exports = router;
