// Import Model
const User = require("../models/user.model");

// Controller function calls using Mongoose to MongoDB
module.exports.findAllUsers = (_, res) => {
  User.find().sort('first_model_field_Asc -second_model_field_Desc')
    .then( users => res.json( users ))
    .catch( err => res.status(401).json( { message: "Something went wrong", err } ));
};

module.exports.findOneSingleUser = (req, res) => {
	User.findOne({ _id: req.params.id })
		.then( oneUser => res.json( oneUser ))
		.catch( err => res.status(402).json( { message: "Something went wrong", err } ));
};

module.exports.createNewUser = (req, res) => {
  // Check if stringKey already exists 
  // const exists = await User.exists(req.body.stringKey);
  User.exists(req.body.stringKey)
  // if (!exists) {
    // User exists, send err message in .then
    .then( err => res.status(403).json( { message: "User already exists", err } ))
    .catch(
      // User doesn't exist, do .create()
      User.create(req.body)
        .then( newUser => res.json( newUser ))
        .catch( err => res.status(400).json( err ))
      );
  // }
};

module.exports.updateExistingUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then( updatedUser => res.json( updatedUser ))
    .catch( err => res.status(405).json( { message: "Something went wrong", err } ));
};

module.exports.deleteAnExistingUser = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then( delResult => res.json( delResult ))
    .catch( err => res.status(406).json( { message: "Something went wrong", err } ));
};
