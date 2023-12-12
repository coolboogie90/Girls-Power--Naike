require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { checkUser } = require("./middleware/authMiddleware");

const router = require("./routes/router");
const app = express();
const PORT = process.env.PORT || 3001;

/* Middleware */

app.use(express.json(), express.urlencoded({extended: true}));
app.use(cookieParser());

/* View engine */

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

/* Routes */

app.get("*", checkUser);
app.use(router);

/* Database connection */

const dbURI = process.env.MONGODB_URI || process.env.DB_URI;

mongoose
	.connect(dbURI)
	.then(() =>
		app.listen(PORT, () => {
			console.log(`App listening on port ${PORT}`);
		})
	)
	.catch((err) => console.log(err));

/* For Vercel */

module.exports = app;
