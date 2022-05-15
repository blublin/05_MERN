const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
	{
		title: {
			// Required type String
			type: String,
			// Optional required field, optional required statement
			required: [true, "Product title required"],
			// Optional minimum string length, optional minlength statement
			minlength: [3, "Product title must be at least 3 characters long"],
			// Optional Regex Validation
			alias: "t"
		},
		description: {
			// Required type String
			type: String,
			// Optional required field, optional required statement
			required: [true, "Product description required"],
			// Optional minimum string length, optional minlength statement
			minlength: [10, "Product description must be at least 10 characters long"],
			// Optional Regex Validation
			alias: "d"
		},
		price: {
			type: Number,
			required: [true, "Product price required"],
			alias: "p"
		},
	},
	// Include createdAt & updatedAt
	{ timestamps: true }
);

// "Product" will be pluralised and lowercased to be used as your collection.
// Optional third argument can be another string to explicitly choose collection name.
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;