const express = require("express");
const router = express.Router();

//index-users
router.get("/", (req, res) => {
    res.send("Get for users");
});

//show users
router.get("/:id", (req, res) => {
    res.send("Show for users");
});

//post users
router.post("/", (req, res) => {
    res.send("POST for users");
});

//delete users
router.delete("/:id", (req, res) => {
    res.send("DELETE for users");
});

module.exports = router;