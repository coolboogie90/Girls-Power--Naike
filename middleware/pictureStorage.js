const multer = require("multer");
const cloudinary = require("cloudinary").v2;

const cloudinaryStorage = require("multer-storage-cloudinary");
const storage = cloudinaryStorage({
	folder: "users",
	allowedFormats: ["jpg", "png"],
	cloudinary: cloudinary,
});

module.exports = multer({ storage: storage });
