const User = require("../models/user.js");

module.exports.renderSignupForm =  (req, res) => {
    res.render("users/signup.ejs");
  };

module.exports.signup = async (req, res, next) => {
    try {
      let { username, password, email } = req.body;
      const newUser = new User({ email: email, username: username });
      let registeredUser = await User.register(newUser, password);
      console.log(registeredUser);

      req.login("registereduser", (err) => {
        if (err) {
          return next(err);
        }
        req.flash(
          "success",
          "Welcome to WanderLust! You have successfully registered."
        );
        res.redirect("/listings");
      });
    } catch (err) {
      req.flash("error", err.message);
      res.redirect("/signup");
    }
  };

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
  };

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome Back! You have successfully logged in.");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
  };

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
      if (err) {
        next(err);
      }
      req.flash("success", "You have successfully logged out!");
      res.redirect("/listings");
    });
  };
