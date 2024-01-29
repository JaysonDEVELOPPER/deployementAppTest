const router = require('express').Router();
const { getAllProduct } = require('../controller/ProductController');

router.get('/', getAllProduct);

module.exports = router;