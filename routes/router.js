const { Router } = require("express");
const { requireAuth } = require("../middleware/authMiddleware");
const controller = require("../controllers/controller");
const upload = require("../middleware/multer");

const router = Router();

// Dashboard
// Filter and order offers
router.get("/dashboard", requireAuth, controller.dashboardGet);

// Login
router.get("/", controller.loginGet);
router.post("/login", controller.loginPost);

// Register
router.get("/register", controller.registerGet);
router.post("/register", upload.any("profilePicture"), controller.registerPost);

// Logout
router.get("/logout", controller.logoutGet);

// Profile
router.get("/profile", requireAuth, controller.profileGet);

// Create a job
router.get("/create", requireAuth, controller.createOfferGet);
router.post("/create", requireAuth, controller.createOfferPost);

// Display job data
router.get("/offers/:id", requireAuth, controller.offerGet);

// Edit a job
router.get("/update/:id", requireAuth, controller.editOfferGet);
router.post("/update/:id", requireAuth, controller.editOfferPost);

// Delete a job
router.get("/delete/:id", requireAuth, controller.deleteOfferPost);

// Archive a job
router.get("/archives", requireAuth, controller.archiveOfferGet);
router.post("/archives/:id", requireAuth, controller.archiveOfferPost);

module.exports = router;
