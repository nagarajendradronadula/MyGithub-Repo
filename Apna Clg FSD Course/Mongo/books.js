const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/test");

main()
.then(() => console.log("Connection succesful") )
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://localhost:27017/amazon'); 
}

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        maxLength: 20,
    },
    author:{
        type: String,
    },
    price:{
        type: Number,
        min: [1, "Price is too low"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
    },
    genre: [String],
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate('6677b108809345146b834536', {price: -500}, {runValidators: true}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err.errors.price.properties.message);``
});

// let book1 = new Book({
//     title: "Marvel Comics v2",
//     price: 599,
//     genre: ["comics", "superheroes", "fiction"],
// });
// book1.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });