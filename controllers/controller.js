// Dashboard page
module.exports.dashboardGet = (req, res) => {
    console.log("Ici, c'est la Dashboard page");
    res.render("index");
};

// Login page
module.exports.loginGet = (req, res) => {
    console.log("Ici, c'est la Login page");
    res.render("login");
};

module.exports.loginPost = (req, res) => {
    res.send("Login envoyé");
};

// Register page
module.exports.registerGet = (req, res) => {
    console.log("Ici, c'est la Register page");
    res.render("register");
};

module.exports.registerPost = (req, res) => {
    res.send("Register envoyé");
};

// Logout page
module.exports.logoutGet = (req, res) => {
    console.log("Ici, c'est la Logout page");
    res.render("login");
};

// Profile page
module.exports.profileGet = (req, res) => {
    console.log("Ici, c'est la Profile page");
    res.render("profile");
};

// Create a job page
module.exports.createOfferGet = (req, res) => {
    console.log("Ici, c'est la Create an offer page");
    res.render("create");
};

module.exports.createOfferPost = (req, res) => {
    res.send("Nouvelle offre envoyée");
};

// Edit a job page
module.exports.editOfferGet = (req, res) => {
    console.log("Ici, c'est la Edit an offer page");
    res.render("update");
};

module.exports.editOfferPut = (req, res) => {
    res.send("Offre modifiée");
};
