const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))

main().then(() => console.log("Connection succesful")).catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

//Index route showing all chats
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    console.log(chats);
    // res.send("working");
    res.render("index.ejs", { chats });
})

// let chat1 = new Chat({
//     from: "neha",
//     to: "priya",
//     msg: "Hello can you send me study material",
//     created_at: new Date(),
// });

// chat1.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

app.get("/", (req, res) => {
    res.send("root is working");
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
})