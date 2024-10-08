const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const path = require("path");
const Chat = require("./models/messages");
const session = require('express-session');
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = "AIzaSyDRfquRHNM9t2KWn2UQhDc1gXeNZaApw8Q"; // My API key

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const User = require("./models/register.js");


const mongoUrl = "mongodb://127.0.0.1:27017/chattingApp";

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: `secret`,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set secure to true if using HTTPS
}));


main()
  .then((res) => {
    console.log("Connected to DataBase");
  })
  .catch((err) => {
    console.log(err);
  });
  
  async function main() {
    await mongoose.connect(mongoUrl);
}

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/register", (req, res) => {
  // console.log("Registering...");
  res.render("register.ejs");
});

//create route
app.post("/register", async (req, res) => {
  let newUser = new User(req.body.register);
  await newUser.save();
  console.log(newUser);
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  // console.log("Logging in...");
  res.render("login.ejs");
});


app.post("/login", async (req, res) => {
  const username= req.body.username;
  const password = req.body.password;
  let user = await User.findOne({ username: username });
  if (user) {
    if (user.password == password) {
      req.session.username = username;
      res.redirect("/chat");
    } else {
      res.redirect(`/login?error=wrongpassword&username=${username}`);
    }
  } else {
    res.redirect(`/login?error=nouser&username=${username}`);
  }
});

app.get("/chat", async (req, res) => {
  const client = req.session.username;
  console.log(client);
  try {
    let chats = await Chat.find().sort({ created_at: -1 }).exec();
    res.render("chat.ejs", { chats, client });
  } catch (err) {
    console.error("Error fetching chats:", err);
    res.redirect("/");
  }
});


app.post("/chat", async (req, res) => {
    const { from, msg } = req.body;
    try {
        let newChat = new Chat({ from, msg });
        // Fetch AI response
        const result = await model.generateContent(msg);
        const response = await result.response.text();
        console.log(response);
        
        newChat.response = response; // Store AI response in the Chat model
        await newChat.save();
        
        console.log("New message saved.");
        res.redirect("/chat");
    } catch (err) {
        console.error("Error saving message:", err);
        res.redirect("/chat");
    }
});

app.get("/logout", async (req, res) => {
  res.redirect("/");
  req.session.destroy();
  // await Chat.findByIdAndDelete();
});

app.listen(8080, () => {
  console.log("Server is listening to port 8080");
});

//Modules
//mongoose, ejs, express, method-override, nodemon
