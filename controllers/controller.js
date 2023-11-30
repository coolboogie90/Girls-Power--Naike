// Dashboard page
module.exports.dashboardGet = (req, res) => {
	console.log("Ici, c'est la Dashboard page");
	res.send("Ici, c'est la Dashboard page");
};

// Login page
module.exports.loginGet = (req, res) => {
	console.log("Ici, c'est la Login page");
	res.send("Ici, c'est la Login page");
};

module.exports.loginPost = (req, res) => {
	res.send("Login envoyé");
};

// Register page
module.exports.registerGet = (req, res) => {
	console.log("Ici, c'est la Register page");
	res.send("Ici, c'est la Register page");
};

module.exports.registerPost = (req, res) => {
	res.send("Register envoyé");
};

// Logout page
module.exports.logoutGet = (req, res) => {
	console.log("Ici, c'est la Logout page");
	res.send("Ici, c'est la Logout page");
};

// Profile page
module.exports.profileGet = (req, res) => {
	console.log("Ici, c'est la Profile page");
	res.send("Ici, c'est la Profile page");
};

// Create a job page
module.exports.createOfferGet = (req, res) => {
	console.log("Ici, c'est la Create an offer page");
	res.send("Ici, c'est la Create an offer page");
};

module.exports.createOfferPost = (req, res) => {
	res.send("Nouvelle offre envoyée");
};

// Edit a job page
module.exports.editOfferGet = (req, res) => {
	console.log("Ici, c'est la Edit an offer page");
	res.send("Ici, c'est la Edit an offer page");
};

module.exports.editOfferPut = (req, res) => {
	res.send("Offre modifiée");
};
