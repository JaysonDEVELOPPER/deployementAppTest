const Product = require('../model/Product');

exports.getAllProduct = async (req, res, next) => {
    await Product.find({})
        .then(products => res.status(200).json(products))
        .catch(err => res.status(500).json({ message: err.message }))
}

exports.createProduct = async (req, res, next) => {
    await Product.create({ ...req.body })
        .then(() => res.status(201).json({ message: "The product is created" }))
        .catch (err => res.status(500).json({ message: err.message }))
}

exports.getProductById = async (req, res, next) => {
    await Product.findById(req.params.id)
        .then(product => res.status(200).json(product))
        .catch(err => res.status(404).json({message: err.message}))
}

exports.deleteProductById = async (req, res, next) => {
    await Product.findByIdAndDelete(req.params.id)
        .then(() => res.status(201).json({message: "The product is deleted"}))
        .catch(err => res.status(404).json({message: err.message}))
}

exports.updateProductById = async (req, res, next) => {
    await Product.findByIdAndUpdate(req.params.id, {...req.body})
        .then(() => res.status(201).json({message: "The product is updated"}))
        .catch(err => res.status(404).json({message: err.message}))
}