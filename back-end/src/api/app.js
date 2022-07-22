const express = require('express');
const cors = require('cors');
const { registerRouter, loginRouter, productRouter, saleRouter, userRouter } = require('../routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/login', loginRouter);
app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/sales', saleRouter);
app.use('/register', registerRouter);
app.use(express.static('public'));

module.exports = app;
