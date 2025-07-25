const express = require('express');
const router = express.Router();

const productsRoutes = require('./product.routes');


router.use('/products', productsRoutes);


module.exports = router;
