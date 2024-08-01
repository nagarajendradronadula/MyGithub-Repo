const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const expressError = require("./expressError");
const { nextTick } = require("process");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
  .then(() => console.log("Connection succesful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakeWhatsapp");
}

//Index route showing all chats
app.get("/chats", async (req, res) => {
  try{
    let chats = await Chat.find();
  console.log(chats);
  // res.send("working");
  res.render("index.ejs", { chats });
  } catch(err) {
    next(err);
  }
});

app.get("/chats/new", (req, res) => {
  // throw new expressError(404, "Page Not Found");
  res.render("new.ejs");
});

app.post("/chats", asyncWrap( async (req, res, next) => {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
      from: from,
      to: to,
      msg: msg,
      created_at: new Date(),
    });
    await newChat.save();
    res.redirect("/chats");
}));

// Wrap Async Function
function asyncWrap(fn) {
    return function(req, res, next) {
        fn(req,res,next).catch(err => next(err));
    };
}

// Show Route -- New
app.get("/chats/:id", asyncWrap( async (req, res, next) => {
    let { id } = req.params;
  let chat = await Chat.findById(id);
  if (!chat) {
    return next(new expressError(404, "Chat Not Found!"));
  }
  res.render("edit.ejs", { chat });
}));

//edit route
app.get("/chats/:id/edit", asyncWrap( async (req, res) => {
        let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
}));

app.put("/chats/:id", asyncWrap( async (req, res) => {

        let { id } = req.params;
  let { msg: newMsg } = req.body;
  // console.log(newMsg);
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { msg: newMsg },
    { runValidators: true, new: true }
  );
  // console.log(updatedChat);
  res.redirect("/chats");
}));

//Destroy route
app.delete("/chats/:id", asyncWrap( async (req, res) => {
        let { id } = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  // console.log(deletedChat);
  res.redirect("/chats");
}));

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

// Error Handling Middleware
const handleValidationErr = (err) => {
    console.log("This was a validation error. Please follow rules");
    console.dir(err);
    return err;
}

app.use((err, req, res, next) => {
    console.log(err.name);
    if(err.name === "ValidationError") {
        handleValidationErr(err);
    }
    next(err);
});

app.use((err, req, res, next) => {
  let { status = 500, message = "Something went wrong" } = err;
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
