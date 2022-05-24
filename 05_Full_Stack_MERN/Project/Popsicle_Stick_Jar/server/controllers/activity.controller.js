// Import Model
const Activity = require("../models/activity.model");

// Controller function calls using Mongoose to MongoDB
module.exports.findAllActivities = (_, res) => {
  Activity.find().sort('first_model_field_Asc -second_model_field_Desc')
    .then( activities => res.json( activities ))
    .catch( err => res.status(401).json( { message: "Something went wrong", err } ));
};

module.exports.findOneSingleActivity = (req, res) => {
	Activity.findOne({ _id: req.params.id })
		.then( oneActivity => res.json( oneActivity ))
		.catch( err => res.status(402).json( { message: "Something went wrong", err } ));
};

module.exports.createNewActivity = (req, res) => {
  // Activity.exists 2nd argument is a callback function accepting an error and a document parameter
  Activity.exists( {stringKey:req.body.stringKey},
    (err, exists) => {
      // If the document does not exist (null), then not null -> create the activity
      !exists
        ? Activity.create(req.body)
          .then( newActivity => res.json( newActivity ))
          .catch( err => res.status(400).json( err ))
        // If the document does exist (object with _id), then not true -> return error in same form as normal error object
        : (console.log("Triggered stringKey exists"), res.status(400).json( {errors: {alreadyExists: { message: "Activity already exists"}}}))
    })
};

module.exports.updateExistingActivity = (req, res) => {
  Activity.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then( updatedActivity => res.json( updatedActivity ))
    .catch( err => res.status(405).json( { message: "Something went wrong", err } ));
};

module.exports.deleteAnExistingActivity = (req, res) => {
  Activity.deleteOne({ _id: req.params.id })
    .then( delResult => res.json( delResult ))
    .catch( err => res.status(406).json( { message: "Something went wrong", err } ));
};
