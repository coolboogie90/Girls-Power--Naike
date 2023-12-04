const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
	firstname: {
		type: String,
		required: [true, "please enter your firstname"],
		minLenght: [3, "enter minimum name lenght 3 characters"],
	},
	lastname: {
		type: String,
		required: [true, "please enter your lastname"],
		minLenght: [3, "enter minimum name lenght 3 characters"],
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
	picture: {
		type: String,
	},
	cv: {
		typpe: String,
	},
	password: {
		type: String,
		required: [true, "please enter an password"],
		minLenght: [6, "Minimun password lenght is 6 characters"],
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
