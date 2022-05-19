const Author = require("../models/author.model");

module.exports.findAllAuthors = (_, res) => {
  Author.find().sort('authorName')
    .then( authors => res.json( authors ))
    .catch( err => res.status(400).json( { message: "Something went wrong", err } ));
};

module.exports.findOneSingleAuthor = (req, res) => {
	Author.findOne({ _id: req.params.id })
		.then( oneAuthor => res.json( oneAuthor ))
		.catch( err => res.status(400).json( { message: "Something went wrong", err } ));
};

module.exports.createNewAuthor = (req, res) => {
  Author.exists({authorName:req.body.authorName}, (err, exists) => {
    console.log(`Is ${req.body.authorName} already in the database? ${exists ? "Yup! It's _id: " + exists._id : "Nope! Gonna make it!"}`)
    !exists
      ? Author.create(req.body)
        .then( newAuthor => res.json( newAuthor ))
        .catch( err => res.status(400).json( err ))
      : (console.log("Triggered Author exists"), res.status(400).json( {errors: {alreadyExists: { message: "Author already exists"}}}))
  });
};

module.exports.updateOne = (req, res) => {
  !Author.exists({name: req.body.name})
    ? Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
      .then( updatedAuthor => res.json( updatedAuthor ))
      .catch( err => res.status(400).json( err ))
    : res.status(400).json( {errors: {alreadyExists: { message: "Author already exists"}}})
};

module.exports.deleteAnExistingAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then( delResult => res.json( delResult ))
    .catch( err => res.status(400).json( { message: "Something went wrong", err } ));
};
