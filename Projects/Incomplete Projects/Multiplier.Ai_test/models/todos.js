const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true, // Ensures content is always provided
    },
    created_at: {
        type: Date,
        default: Date.now, // Sets default value to current date and time
    },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo; // Corrected the typo here
