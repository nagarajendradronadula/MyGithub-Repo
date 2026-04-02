const express = require("express");
const router = express.Router();

//index - post
router.get("/", (req, res) => {
    res.send("Get for posts");
});

//show posts
router.get("/:id", (req, res) => {
    res.send("Show for posts");
});

//post posts
router.post("/", (req, res) => {
    res.send("POST for posts");
});

//delete posts
router.delete("/:id", (req, res) => {
    res.send("DELETE for posts");
});

module.exports = router;