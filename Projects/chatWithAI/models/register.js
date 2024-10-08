const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            default: "Guest",
        },
        dateOfBirth: {
            type: Date,
            required: true,
            default: Date.now(),
        },
        gender: {
            type: String,
            required: true,
            enum: ["Male", "Female", "Other"],
            default: "Other",
        },
        username: {
            type: String,
            required: true,
            unique: true,
            uppercase: true,
            default: "Guest",
        },
        password: {
            type: String,
            required: true,
            default: "12345678",
        },
        email: {
            type: String,
            required: true,
             lowercase: true,
        },
        phone: {
            type: Number,
            required: true,
            unique: true,
        }
});

const User = mongoose.model("User", registerSchema);

module.exports = User;