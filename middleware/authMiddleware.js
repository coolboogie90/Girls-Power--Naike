require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/Users");

const requireAuth = (req, res, next) => {
	const token = req.cookies.jwt;
	if (token) {
	} else {
	}
};

const checkUser = (req, res, next) => {
	const token = req.cookies.jwt;
	if (token) {
	} else {
	}
};

module.exports = { requireAuth, checkUser };
