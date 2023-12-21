// const multer = require("multer");

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "./uploads");
//     },
//     filename: function (req, file, cb) {
//         const name = file.originalname.split(" ").join("");
//         const extension = MIME_TYPES[file.mimetype];
//         cb(null, name + Date.now() + "." + extension);
//     },
// });

// const fileFilter = (req, file, cb) => {
//     // reject a file
//     if (
//         file.mimetype.split("/") === "jpeg" ||
//         file.mimetype.split("/") === "png" ||
//         file.mimetype.split("/") === "jpg" ||
//         file.mimetype.split("/") === "pdf"
//     ) {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// };

// const upload = multer({
//     storage: storage,
//     fileFilter: fileFilter,
// });

// module.exports = upload;

const multer = require("multer");

const MIME_TYPES = {
    "image/jpg": "jpg",
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/pdf": "png",
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        const name = file.originalname.split(" ").join("");
        const extension = MIME_TYPES[file.mimetype];
        cb(null, name + Date.now() + "." + extension);
    },
});
const upload = multer({ storage: storage });
module.exports = upload;
