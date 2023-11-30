const { Router } = require("express");
const router = Router();
const controller = require("../controllers/controller");

// Dashboard
router.get("/", controller.dashboardGet);

// Login
router.get("/login", controller.loginGet);
router.post("login", controller.loginPost);

// Register
router.get("/register", controller.registerGet);
router.post("/register", controller.registerPost);

// Logout
router.get("/logout", controller.logoutGet);

// Profile
router.get("/profile", controller.profileGet);

// Create a job
router.get("/create", controller.createOfferGet);
router.post("/create", controller.createOfferPost);

// Edit a job
router.get("/update", controller.editOfferGet);
router.put("/update", controller.editOfferPut);

module.exports = router;
