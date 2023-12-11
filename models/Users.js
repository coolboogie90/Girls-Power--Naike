const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, "please enter your firstname"],
		minlength: [3, "enter minimum name Length 3 characters"],
	},
	lastName: {
		type: String,
		required: [true, "please enter your lastname"],
		minlength: [3, "enter minimum name Length 3 characters"],
	},
	email: {
		type: String,
		required: [true, "please enter an email"],
		unique: true,
		lowercase: true,
		validate: [isEmail, "Please enter a valid email"],
	},
	github: {
		type: String,
	},
	profilePicture: {
		type: String,
	},
	resume: {
		type: String,
	},
	password: {
		type: String,
		required: [true, "please enter an password"],
		minlength: [6, "Minimun password Length is 6 characters"],
	},
});

userSchema.pre("save", async function (next) {
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

userSchema.statics.login = async function (email, password) {
	const user = await this.findOne({ email });
	if (user) {
		const auth = await bcrypt.compare(password, user.password);
		if (auth) {
			return user;
		}
		throw Error("Incorrect password");
	}
	throw Error("Incorrect email");
};

const User = mongoose.model("user", userSchema);

module.exports = User;
