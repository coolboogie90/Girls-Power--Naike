// Dashboard page
module.exports.dashboardGet = (req, res) => {
	res.render("index");
};

// Login page
module.exports.loginGet = (req, res) => {
	res.render("login");
};

module.exports.loginPost = (req, res) => {
	console.log("Login envoyé");
	res.send("Login envoyé");
};

// Register page
module.exports.registerGet = (req, res) => {
	res.render("register");
};

module.exports.registerPost = (req, res) => {
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
