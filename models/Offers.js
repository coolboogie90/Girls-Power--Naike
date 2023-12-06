const mongoose = require("mongoose");
const { isEmail } = require("validator");

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
	employerName: {
		type: String,
		required: true,
	},
	employerEmail: {
		type: String,
		required: [true, "please enter an email"],
		lowercase: true,
		validate: [isEmail, "Please enter a valid email"],
	},
	employerPhone: {
		type: String,
	},
	employerAddress: {
		type: String,
	},
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
		type: Object,
	},
});

const Offer = mongoose.model("offer", offerSchema);

module.exports = Offer;
