const Product = require("../models/product.model");

module.exports.findAllProducts = (_, res) => {
  Product.find()
    .then( products => res.json( products ))
    .catch( err => res.status(400).json( { message: "Something went wrong", err } ));
};

module.exports.findOneSingleProduct = (req, res) => {
	Product.findOne({ _id: req.params.id })
		.then( oneProduct => res.json( oneProduct ))
		.catch( err => res.status(400).json( { message: "Something went wrong", err } ));
};

module.exports.createNewProduct = (req, res) => {
  Product.create(req.body)
    .then( newProduct => res.json( newProduct ))
    .catch( err => res.status(400).json( { message: "Something went wrong", err } ));
};

module.exports.updateOne = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then( updatedProduct => res.json( updatedProduct ))
    .catch( err => res.status(400).json( { message: "Something went wrong", err } ));
};

module.exports.deleteAnExistingProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then( delResult => res.json( delResult ))
    .catch( err => res.status(400).json( { message: "Something went wrong", err } ));
};
