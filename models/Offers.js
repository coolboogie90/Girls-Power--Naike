const mongoose = require("mongoose");
const { isEmail } = require("validator");

const employerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: [true, "please enter an email"],
		unique: true,
		lowercase: true,
		validate: [isEmail, "Please enter a valid email"],
	},
	phone: {
		type: String,
	},
	adress: {
		type: String,
	},
});
const offerSchema = new mongoose.Schema({
	createdAt: {
		type: Date,
		immutable: true,
		default: () => Date.now(),
	},
	updatedAt: {
		type: Date,
		default: () => Date.now(),
	},
	jobTitle: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
	employer: employerSchema,
	offerOrigin: {
		type: String,
		required: true,
	},
	offerStatus: {
		type: String,
		required: true,
	},
	comments: {
		type: String,
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
});

const Offer = mongoose.model("offer", offerSchema);

module.exports = Offer;
