const express = require('express');
const router = express.Router();

/* controlador */
const productController = require('../controllers/productController');

/* /products */
router.get('/detail', productController.detail);


module.exports = router;