const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
    query: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Search', searchSchema);
