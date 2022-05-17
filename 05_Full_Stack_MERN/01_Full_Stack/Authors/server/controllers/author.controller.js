const Author = require("../models/author.model");

module.exports.findAllAuthors = (_, res) => {
  Author.find()
    .then( authors => res.json( authors ))
    .catch( err => res.status(400).json( { message: "Something went wrong", err } ));
};

module.exports.findOneSingleAuthor = (req, res) => {
	Author.findOne({ _id: req.params.id })
		.then( oneAuthor => res.json( oneAuthor ))
		.catch( err => res.status(400).json( { message: "Something went wrong", err } ));
};

module.exports.createNewAuthor = (req, res) => {
  Author.create(req.body)
    .then( newAuthor => res.json( newAuthor ))
    .catch( err => res.status(400).json( err ));
};

module.exports.updateOne = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then( updatedAuthor => res.json( updatedAuthor ))
    .catch( err => res.status(400).json( { message: "Something went wrong", err } ));
};

module.exports.deleteAnExistingAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then( delResult => res.json( delResult ))
    .catch( err => res.status(400).json( { message: "Something went wrong", err } ));
};
