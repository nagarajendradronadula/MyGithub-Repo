const express = require("express");
const app = express();
const users = require("./routes/users.js");
const posts = require("./routes/posts.js");
// const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
  secret: "secretString",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

app.get("/register", (req, res) => {
  let { name = "Anonymous" } = req.query;
  // console.log(req.session);
  req.session.name = name;
  // console.log(req.session.name);
  // res.send(name);
  if (name === "Anonymous") {
    req.flash("error", "Please provide a name");
  } else {
    req.flash("success", "User registered succesfully");
  }
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  // console.log(req.flash("success"));
  
  res.render("page.ejs", { name: req.session.name });
});

// app.get("/reqcount", (req, res) => {
//     if(req.session.count){
//         req.session.count++;
//     }else{
//         req.session.count = 1;
//     }
//     res.send(`You sent request ${req.session.count} times`);
// })

// app.get("/session", (req, res) => {
//     res.send("Session created");
// });

// app.use(cookieParser("unnamedcode"));

// app.get("/getcookies", (req, res) => {
//     res.cookie("greet", "Hello!");
//     res.send("We sent cookies");
// });

// app.get("/signed", (req, res) => {
//     res.cookie("made-in", "India",{signed: true});
//     res.send("We sent signed cookies");
// });

// app.get("/verify", (req, res) => {
//     console.log(req.signedCookies);
//     res.send("verified");
// });

// app.get("/", (req, res) => {
//     console.dir(req.cookies);
//     res.send("Hi, I am root");
// });

// app.get("/greet", (req, res) => {
//     let {name = "anonymous"} = req.cookies;
//     res.send(`Hello ${name}`);
// });

// app.use("/users", users);
// app.use("/posts", posts);

app.listen(3000, () => {
  console.log("Server is listenong to port 3000");
});
