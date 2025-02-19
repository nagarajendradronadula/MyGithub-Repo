const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    mobile: {
        type: Number,
    },
    mail: {
        type: String,
        maxLength: 50,
    },
    created_at: {
        type: Date,
    },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;