const router = require('express').Router();
const { getAllProduct, createProduct, getProductById } = require('../controller/ProductController');

router.get('/', getAllProduct);
router.post('/', createProduct);
router.get('/:id', getProductById);

module.exports = router;