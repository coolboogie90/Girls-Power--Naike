require("dotenv").config();
const User = require("../models/Users");
const jwt = require("jsonwebtoken");

// Handle errors

// create JWT
const maxAge = process.env.MAX_AGE;
const createToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: maxAge,
	});
};

// Dashboard page
module.exports.dashboardGet = (req, res) => {
	res.render("index");
};

// Login page
module.exports.loginGet = (req, res) => {
	res.render("login");
};

module.exports.loginPost = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.login(email, password);
		const token = createToken(user._id);
		res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
		res.status(200).json({ user: user._id });
	} catch (err) {
		console.log(err);
	}
};

// Register page
module.exports.registerGet = (req, res) => {
	res.render("register");
};

module.exports.registerPost = async (req, res) => {
	console.log("Register envoyé");
	res.send("Register envoyé");
};

// Logout page
module.exports.logoutGet = (req, res) => {
	res.render("login");
};

// Profile page
module.exports.profileGet = (req, res) => {
	res.render("profile");
};

// Create a job page
module.exports.createOfferGet = (req, res) => {
	res.render("create");
};

module.exports.createOfferPost = (req, res) => {
	console.log("Nouvelle offre envoyée");
	res.send("Nouvelle offre envoyée");
};

// Edit a job page
module.exports.editOfferGet = (req, res) => {
	res.render("update");
};

module.exports.editOfferPut = (req, res) => {
	console.log("Offre modifiée");
	res.send("Offre modifiée");
};

// Delete a job

// Logout page
