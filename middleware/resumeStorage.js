const multer = require("multer");
const cloudinary = require("cloudinary").v2;

const cloudinaryStorage = require("multer-storage-cloudinary");
const storage = cloudinaryStorage({
	folder: "users",
	allowedFormats: ["raw", "pdf"],
	cloudinary: cloudinary,
});

module.exports = multer({ storage: storage });
