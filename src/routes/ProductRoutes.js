const router = require('express').Router();
const { getAllProduct, createProduct, getProductById, deleteProductById } = require('../controller/ProductController');

router.get('/', getAllProduct);
router.post('/', createProduct);
router.get('/:id', getProductById);
router.delete('/:id', deleteProductById)

module.exports = router;