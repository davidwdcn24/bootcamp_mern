const Product = require('../models/product.model');

module.exports.getAllProducts = (request, response) => {
    Product.find()
        .then(products => response.status(200).json(products))
        .catch(err => response.status(404).json({ message: "Something went wrong", error: err }));
}

module.exports.getProduct = (request, response) => {
    Product.findOne({ _id: request.params.id })
        .then(product => response.status(200).json(product))
        .catch(err => response.status(404).json({ message: "Something went wrong", error: err }));
}

module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(product => response.status(201).json(product))
        .catch(err => response.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(product => response.status(200).json(product))
        .catch(err => response.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteProduct => response.status(200).json(deleteProduct))
        .catch(err => response.status(400).json({ message: "Something went wrong", error: err }));
};
