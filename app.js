require("dotenv").config();

const express = require("express");
const router = require("./routes/router");
const app = express();

const PORT = process.env.PORT || 3001;

/* Middleware */
app.use(express.static("public"));
app.use(express.json());

/* View engine */
app.set("view engine", "ejs");

/* Lauch server */
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});

/* Routes */
// app.get("*", checkUser);
app.use(router);
