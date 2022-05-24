// import mongoose
const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema(
	{
		// Generic string key field
		stringKey: {
			// Required type String
			type: String,
			// Optional required field, optional required statement
			required: [true, "Required string statement"],
			// Optional minimum string length, optional minlength statement
			minlength: [3, "Min length string statement"],
			// Optional max string length, optional maxlength statement
			maxlength: [50, "Max length string statement"],
			// Optional bool to convert to lowercase
			lowercase: true,
			// Optional bool to convert to uppercase
			uppercase: true,
			// Optional Regex Validation
			match: [/regexValidationHere/, "Regex Match statement"],
			// Optional key alias. Ex: Activity.stringKey === Activity.sK
			alias: "sk"
		},
		// Generic number key field
		numberKey: {
			type: Number,
			required: [true, "Required number statement"],
			min: [1, "Min value statement"],
			max: [1000, "Max value statement"],
			alias: "nK"
		},
		// Nested Documents. Ex: friends: [ActivitySchema]
		nested: [SomeSchema]
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

// "Activity" will be pluralised and lowercased to be used as your collection.
// Optional third argument can be another string to explicitly choose collection name.
const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;