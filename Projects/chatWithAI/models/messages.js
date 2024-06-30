const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    msg: {
        type: String,
    },
    response: {
        type: String,
    },
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;