// import mongoose
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		// Generic string key field
		stringKey: {
			// Required type String
			type: String
		}
	},
	// Include createdAt & updatedAt
	{ timestamps: true },
	// Only set createdAt
	{ timestamps: {
		createdAt: true,
		updatedAt: false
	}},
	// Alternate property names
	{ timestamps: {
		createdAt: "created_at",
		updatedAt: "updated_at"
	}}
);

// "User" will be pluralised and lowercased to be used as your collection.
// Optional third argument can be another string to explicitly choose collection name.
const User = mongoose.model("User", UserSchema);

module.exports = User;