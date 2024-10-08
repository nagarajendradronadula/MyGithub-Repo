const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
    username: String,
    email: String,
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
    let user1 = new User({
        username: "Adam",
        email: "adam@gmail",
    });

    let post1 = new Post({
        content: "Hello World",
        likes: 29,
    });

    post1.user = user1;

    let res1 = await user1.save();
    let res2 = await post1.save();

    console.log(res1);
    console.log(res2);
}

addData();