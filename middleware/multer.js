const multer = require("multer");
const path = require("path");
const { storage } = require("../middleware/cloudinary");

// Multer config
const uploadToCloudinary = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        // Allowed filetypes
        const filetypes = /jpeg|jpg|png|pdf/;
        // Check ext
        const extname = filetypes.test(
            path.extname(file.originalname).toLowerCase()
        );
        if (extname) {
            return cb(null, true);
        } else {
            cb(new Error("File type is not supported", false));
        }
    },
    limits: { fileSize: 1000000 },
});

module.exports = uploadToCloudinary;
