require("dotenv").config();

const express = require("express");
const router = require("./routes/router");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

/* Middleware */

app.use(express.json());

/* View engine */
//app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "public"));
/* Routes */
// app.get("*", checkUser);
app.use(router);

// database connection
const dbURI = process.env.DB_URI;

mongoose
    .connect(dbURI)
    .then(() =>
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
        })
    )
    .catch((err) => console.log(err));

module.exports = app;
