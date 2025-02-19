const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});