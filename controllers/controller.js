require("dotenv").config();
const storage = require("../middleware/cloudinary")
const User = require("../models/Users");
const Offer = require("../models/Offers");
const jwt = require("jsonwebtoken");
const multer = require("multer");

let currentUserId;

// Handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: "", password: "" };
    if (err.message === "Incorrect email") {
        errors.email = "That email is not registered";
    }
    if (err.message === "Incorrect password") {
        errors.password = "That password is incorrect";
    }
    if (err.code === 11000) {
        errors.email = "That email is already registered";
        return errors;
    }
    if (err.message.includes("user validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }
};

// create JWT
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: maxAge,
    });
};

// Dashboard page
module.exports.dashboardGet = async (req, res) => {
    res.render("index");
};

module.exports.filterOffersGet = async (req, res) => {
    const filterField =
        req.query.filter === "date" ? "updatedAt" : "offerStatus";
    const sortOrder = req.query.order === "dsc" ? -1 : 1;

    const offers = await Offer.find({
        author: new ObjectId(currentUserId),
    }).sort({ [filterField]: sortOrder });

    res.render("partials/dashboard-grid", { offers });
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
        currentUserId = user._id;
        res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json({ user: user._id });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
};

// Register page
module.exports.registerGet = (req, res) => {
    res.render("register");
};

module.exports.registerPost = async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        github,
        profilePicture,
        resume,
        password,
    } = req.body;
    try {
        //const field = req.file('profilePicture');

        const upload = multer({ storage });

        const profilePictureResult = await upload.single('profilePicture');
        const profilePictureUrl = profilePictureResult.secure_url;

        const user = await User.create({
            firstName,
            lastName,
            email,
            github,
            profilePicture: profilePictureUrl,
            resume,
            password,
        });
        const token = createToken(user._id);
        currentUserId = user._id;
        res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ user: user._id });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
};

// Logout page
module.exports.logoutGet = (req, res) => {
    res.cookie("jwt", "", { maxAge: 1 });
    res.redirect("/login");
};

// Profile page
module.exports.profileGet = (req, res) => {
    res.render("profile");
};

// Create a job page
module.exports.createOfferGet = (req, res) => {
    res.render("create");
};

module.exports.createOfferPost = async (req, res) => {
    const {
        jobTitle,
        url,
        employerName,
        employerEmail,
        employerPhone,
        employerAddress,
        offerOrigin,
        offerStatus,
        comments,
    } = req.body;
    try {
        const offer = await Offer.create({
            jobTitle,
            url,
            employerName,
            employerEmail,
            employerPhone,
            employerAddress,
            offerOrigin,
            offerStatus,
            comments,
            author: currentUserId,
        });
        res.status(201).redirect("/dashboard");
        console.log("Offer created");
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
};

// Edit a job page
module.exports.editOfferGet = async (req, res) => {
    const id = req.params.id;
    const offer = await Offer.findById(id);
    console.log(offer);
    res.render("update", { offer });
};

module.exports.editOfferPost = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const {
        jobTitle,
        url,
        employerName,
        employerEmail,
        employerPhone,
        employerAddress,
        offerOrigin,
        offerStatus,
        comments,
    } = req.body;
    console.log(req.body.jobTitle);
    await Offer.updateOne(
        { _id: id },
        {
            $set: {
                jobTitle,
                url,
                employerName,
                employerEmail,
                employerPhone,
                employerAddress,
                offerOrigin,
                offerStatus,
                comments,
                updatedAt: Date.now(),
            },
        }
    );
    //res.status(201).json({ offer : offerToUpdate._id});
    res.status(201).redirect("/dashboard");
    console.log("Offer updated");
};

// Get offer data
module.exports.offerGet = async (req, res) => {
    const id = req.params.id;
    const offer = await Offer.findById(id);
    res.render("offer", { offer });
};

// Delete a job
module.exports.deleteOfferPost = async (req, res) => {
    const id = req.params.id;
    await Offer.deleteOne({ _id: id });
    res.status(201).redirect("/dashboard");
    console.log("Offer deleted");
};

// Archive a job
module.exports.archiveOfferGet = async (req, res) => {
    res.render("archives");
};

module.exports.archiveOfferPost = async (req, res) => {
    const id = req.params.id;
    await Offer.updateOne(
        { _id: id },
        {
            $set: {
                offerStatus: "Archive",
                updatedAt: Date.now(),
            },
        }
    );
    res.status(201).redirect("/dashboard");
    console.log("Offer archived");
};
