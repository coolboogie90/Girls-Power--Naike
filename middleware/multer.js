// const multer = require("multer");
// const path = require("path");

// // Multer config
// module.exports = multer({
//     storage: multer.diskStorage({}),
//     fileFilter: (req, file, cb) => {
//         let ext = path.extname(file.originalname);
//         if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
//             cb(new Error("File type is not supported"), false);
//             return;
//         }
//         cb(null, true);
//     },
// });

const multer = require("multer");

const MIMETYPES = {
    "image/jpg": "jpg",
    "image/jpeg": "jpg",
    "image/png": "png",
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads/");
    },
    filename: function (req, file, cb) {
        const name = file.originalname.split(" ").join("");
        const extension = MIME_TYPES[file.mimetype];
        cb(null, name + Date.now() + "." + extension);
    },
});
const upload = multer({ storage: storage });
module.exports = upload;
