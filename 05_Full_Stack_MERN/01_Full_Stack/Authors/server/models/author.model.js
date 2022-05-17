const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
	{
		name: {
			// Required type String
			type: String,
			// Optional required field, optional required statement
			required: [true, "Author title required"],
			// Optional minimum string length, optional minlength statement
			minlength: [3, "Author title must be at least 3 characters long"],
			// Optional Regex Validation
			alias: "n"
		},
	},
	// Include createdAt & updatedAt
	{ timestamps: true }
);

// "Author" will be pluralised and lowercased to be used as your collection.
// Optional third argument can be another string to explicitly choose collection name.
const Author = mongoose.model("Author", AuthorSchema);
// authors

module.exports = Author;