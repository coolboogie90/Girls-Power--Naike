const { Router } = require("express");
const { requireAuth } = require("../middleware/authMiddleware");
const controller = require("../controllers/controller");

const router = Router();

// Dashboard
router.get("/", requireAuth, controller.dashboardGet);

// Login
router.get("/login", controller.loginGet);
router.post("/login", controller.loginPost);

// Register
router.get("/register", controller.registerGet);
router.post("/register", controller.registerPost);

// Logout
router.get("/logout", controller.logoutGet);

// Profile
router.get("/profile", requireAuth, controller.profileGet);

// Create a job
router.get("/create", requireAuth, controller.createOfferGet);
router.post("/create", requireAuth, controller.createOfferPost);

// Edit a job
router.get("/update/:id", requireAuth, controller.editOfferGet);
router.put("/update/:id", requireAuth, controller.editOfferPut);

// all jobs for a user
router.get("/api/:author", requireAuth, controller.allOffersGet);

module.exports = router;
