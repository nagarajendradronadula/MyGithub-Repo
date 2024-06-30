const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "pexels-butfirstcaphesuada-1081260075-20780455.jpg",
        set: (v) => v === "" ? "pexels-butfirstcaphesuada-1081260075-20780455.jpg" : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;