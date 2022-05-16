const User = require("../models/user.model");

module.exports.findAllUsers = (_, res) => {
  User.find()
    .then( users => res.json( users ))
    .catch( err => res.status(400).json( { message: "Something went wrong", err } ));
};

module.exports.findOneSingleUser = (req, res) => {
	User.findOne({ _id: req.params.id })
		.then( oneUser => res.json( oneUser ))
		.catch( err => res.status(400).json( { message: "Something went wrong", err } ));
};

module.exports.createNewUser = (req, res) => {
  User.create(req.body)
    .then( newUser => res.json( newUser ))
    .catch( err => res.status(400).json( { message: "Something went wrong", err } ));
};

module.exports.updateExistingUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then( updatedUser => res.json( updatedUser ))
    .catch( err => res.status(400).json( { message: "Something went wrong", err } ));
};

module.exports.deleteAnExistingUser = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then( delResult => res.json( delResult ))
    .catch( err => res.status(400).json( { message: "Something went wrong", err } ));
};
