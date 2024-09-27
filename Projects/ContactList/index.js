// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const path = require("path");
// const Contact = require("./models/contact.js");
// const methodOverride = require("method-override");
// const bcrypt = require("bcrypt");
// const passport = require("passport");
// const session = require("express-session");
// const LocalStrategy = require("passport-local");

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(passport.initialize());
// app.use(passport.session());

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");
// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));

// main()
//   .then(() => console.log("Connection succesful"))
//   .catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/ContactList");
// }

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Contact = require("./models/contact.js");
const methodOverride = require("method-override");
const bcrypt = require("bcrypt");
const passport = require("passport");
const session = require("express-session");  // Session middleware
const LocalStrategy = require("passport-local");

// Middleware to parse request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

// Session setup (this is important for managing login sessions)
app.use(
  session({
    secret: "secret",            // A secret key to sign the session ID cookie
    resave: false,               // Don't save session if unmodified
    saveUninitialized: true,     // Save uninitialized sessions (useful for login)
  })
);

// Passport setup (use this after session setup)
app.use(passport.initialize());
app.use(passport.session()); // Persistent login sessions

// MongoDB connection
main()
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ContactList");
}

// Passport Local Strategy setup
passport.use(
  new LocalStrategy(
    { usernameField: "username", passwordField: "password" }, // Ensure usernameField is correct
    async (username, password, done) => {
      try {
        const user = await User.findOne({ email: username });
        if (!user) {
          return done(null, false, { message: "Incorrect email" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return done(null, false, { message: "Incorrect password" });
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

// Serialize and deserialize user for session handling
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Updated deserializeUser using async/await
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);  // No longer using callback
    done(null, user);
  } catch (err) {
    done(err);
  }
});

  
  
  // Set up Express Session
  app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true
  }));
  
  // Initialize Passport
  app.use(passport.initialize());
  app.use(passport.session());
  
  // Authentication middleware
  const authenticate = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/login");
  };
  

app.get("/", (req, res) => {
  res.redirect("/login");
});

//login routes
app.get("/login", (req, res) => {
  res.render("login");
});

app.post(
    "/login",
    passport.authenticate("local", {
      failureRedirect: "/login",
    }),
    (req, res) => {
      res.redirect("/contacts");
    }
  );
  

app.get("/register", (req, res) => {
  res.render("register");
});

const User = require("./models/user"); // Ensure you have a user model

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body; // Fetch form data
  
  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.render("register", { error: "User already exists" });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  
  // Create a new user
  const newUser = new User({ username, email, password: hashedPassword });
  
  // Save the user in the database
  await newUser.save();
  
  // Redirect to login page
  res.redirect("/login");
});


app.get("/logout", authenticate, (req, res, next) => {
  req.logout(function(err) { // Providing a callback
    if (err) { 
      return next(err); // Pass any errors to the next middleware
    }
    res.redirect("/login"); // Redirect after logout
  });
});


// Index route showing all chats
app.get("/contacts", authenticate, async (req, res) => {
  let contacts = await Contact.find();
  console.log(contacts);
  // res.send("working");
  res.render("index.ejs", { contacts });
});

app.get("/contacts/new", authenticate, (req, res) => {
  res.render("new.ejs");
});

app.post("/contacts", authenticate, (req, res) => {
  let { name, mobile, mail } = req.body;
  let newContact = new Contact({
    name: name,
    mobile: mobile,
    mail: mail,
    created_at: new Date(),
  });
  // console.log(newChat);
  newContact
    .save()
    .then((res) => {
      console.log("Contact has been saved");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/contacts");
});

//edit route
app.get("/contacts/:id/edit", authenticate, async (req, res) => {
  let { id } = req.params;
  let contact = await Contact.findById(id);
  res.render("edit.ejs", { contact });
});

app.put("/contacts/:id", authenticate, async (req, res) => {
  let { id } = req.params;
  let { name: newName, mobile: newMobile, mail: newMail } = req.body;
  console.log(newName);
  console.log(newMobile);
  console.log(newMail);
  let updatedContact = await Contact.findByIdAndUpdate(
    id,
    { name: newName, mobile: newMobile, mail: newMail },
    { runValidators: true, new: true }
  );
  console.log(updatedContact);
  res.redirect("/contacts");
});

//Destroy route
app.delete("/contacts/:id", authenticate, async (req, res) => {
  let { id } = req.params;
  let deletedContact = await Contact.findByIdAndDelete(id);
  console.log(deletedContact);
  res.redirect("/contacts");
});

// app.get("/", (req, res) => {
//   res.send("root is working");
// });

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
