const router = require('express').Router();
const { getAllProduct, createProduct } = require('../controller/ProductController');

router.get('/', getAllProduct);
router.post('/', createProduct);

module.exports = router;