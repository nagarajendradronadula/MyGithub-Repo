// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const methodOverride = require("method-override");
// const path = require("path");
// const Chat = require("./models/messages");
// const session = require('express-session');
// const bodyParser = require('body-parser');
// const { GoogleGenerativeAI } = require("@google/generative-ai");
// require('dotenv').config();

// const apiKey = process.env.API_KEY; 

// const genAI = new GoogleGenerativeAI(apiKey);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
// const User = require("./models/register.js");

// app.use(methodOverride("_method"));
// app.use(express.urlencoded({ extended: true }));
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));
// app.use(express.static(path.join(__dirname, "public")));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(session({
//   secret: `secret`,
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: false } // Set secure to true if using HTTPS
// }));

// // Connect to Local MongoDB
// mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true, })
//   .then(() => console.log('Connected to local MongoDB'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// app.get("/", (req, res) => {
//   res.render("index.ejs");
// });

// app.get("/register", (req, res) => {
//   // console.log("Registering...");
//   res.render("register.ejs");
// });

// //create route
// app.post("/register", async (req, res) => {
//   try{
//     let newUser = new User(req.body.register);
//   await newUser.save();
//   console.log(newUser);
//   res.redirect("/login");
//   } catch (err) {
//     console.log(err);
//     res.redirect("/register", err);
//   }
  
// });

// app.get("/login", (req, res) => {
//   // console.log("Logging in...");
//   res.render("login.ejs");
// });


// app.post("/login", async (req, res) => {
//   const username= req.body.username;
//   const password = req.body.password;
//   let user = await User.findOne({ username: username });
//   if (user) {
//     if (user.password == password) {
//       req.session.username = username;
//       res.redirect("/chat");
//     } else {
//       res.redirect(`/login?error=wrongpassword&username=${username}`);
//     }
//   } else {
//     res.redirect(`/login?error=nouser&username=${username}`);
//   }
// });

// app.get("/chat", async (req, res) => {
//   const client = req.session.username;
//   console.log(client);
//   try {
//     let chats = await Chat.find().sort({ created_at: -1 }).exec();
//     res.render("chat.ejs", { chats, client });
//   } catch (err) {
//     console.error("Error fetching chats:", err);
//     res.redirect("/");
//   }
// });


// app.post("/chat", async (req, res) => {
//     const { from, msg } = req.body;
//     try {
//         let newChat = new Chat({ from, msg });
//         // Fetch AI response
//         // const result = await model.generateContent(msg);
//         // const response = await result.response.text();
//         // console.log(response);
//         const result = await model.generateContent({
//           prompt: { text: msg }, // Pass the user's message here
//         });
//       const response = result.candidates?.[0]?.output || "AI did not generate a response.";
//       console.log(response);
        
//         newChat.response = response; // Store AI response in the Chat model
//         await newChat.save();
        
//         console.log("New message saved.");
//         res.redirect("/chat");
//     } catch (err) {
//         console.error("Error saving message:", err);
//         res.redirect("/chat");
//     }
// });

// app.get("/logout", async (req, res) => {
//   res.redirect("/");
//   req.session.destroy(err => {
//     if(err) {
//       console.error("Error destroying session:", err);
//     }
//     res.redirect("/");
//   });
// });

// app.listen(8080, () => {
//   console.log("Server is listening to port 8080");
// });

// //Modules
// //mongoose, ejs, express, method-override, nodemon



const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const path = require("path");
const Chat = require("./models/messages");
const session = require('express-session');
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const apiKey = process.env.API_KEY; 

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const User = require("./models/register.js");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET || "secret",  // Use environment variable for secret
  resave: false,
  saveUninitialized: true,
  cookie: { 
    secure: process.env.NODE_ENV === "production", // Use HTTPS in production
    httpOnly: true,
    sameSite: "lax", // Prevent CSRF
  }
}));

// Connect to Local MongoDB
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to local MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

// Register Route
app.post("/register", async (req, res) => {
  try {
    let newUser = new User(req.body.register);
    await newUser.save();
    console.log(newUser);
    res.redirect("/login");
  } catch (err) {
    console.log(err);
    res.redirect("/register?error=Something went wrong");
  }
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

// Login Route
app.post("/login", async (req, res) => {
  const username = req.body.username;
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
        const result = await model.generateContent({
            prompt: { text: msg },
        });

        const response = result.candidates?.[0]?.output || "I'm sorry, I couldn't process that.";
        newChat.response = response; // Store AI response in the Chat model
        await newChat.save();
        
        console.log("New message saved.");
        res.redirect("/chat");
    } catch (err) {
        console.error("Error saving message:", err);

        // Optional: Save the message with an error response
        await new Chat({ from, msg, response: "Error communicating with AI" }).save();
        res.redirect("/chat");
    }
});

// app.get("/logout", (req, res) => {
//   req.session.destroy((err) => {
//     if (err) {
//       console.error("Error destroying session:", err);
//     }
//     res.redirect("/");
//   });
// });

app.get("/logout", async (req, res) => {
  try {
    // Delete all chats from the database
    await Chat.deleteMany({});

    // Destroy the session
    req.session.destroy((err) => {
      if (err) {
        console.error("Error destroying session:", err);
      }
      res.redirect("/");
    });
  } catch (err) {
    console.error("Error deleting chat history:", err);
    res.redirect("/chat");
  }
});

app.listen(8080, () => {
  console.log("Server is listening to port 8080");
});