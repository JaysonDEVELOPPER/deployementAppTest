const Product = require('../model/Product');

exports.getAllProduct = async (req, res, next) => {
    await Product.find({})
        .then(products => res.status(200).json(products))
        .catch(err => res.status(500).json({ message: err.message }))
}