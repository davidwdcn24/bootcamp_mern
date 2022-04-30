const Product = require('../models/product.model');

module.exports.getAll = (req, res) => {
    Product.find()
        .then(response => res.status(200).json({ persons: response }))
        .catch(err => res.status(404).json({ message: "Something went wrong", error: err }));
}

module.exports.getOne = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(response => res.status(200).json({ person: response }))
        .catch(err => res.status(404).json({ message: "Something went wrong", error: err }));
}

module.exports.createProduct = (req, res) => {
    console.log('server', req.body);
    Product.create(req.body)
        .then(response => res.status(201).json({ person: response }))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(response => res.status(200).json({ person: response }))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(response => res.status(200).json({ result: response }))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};
