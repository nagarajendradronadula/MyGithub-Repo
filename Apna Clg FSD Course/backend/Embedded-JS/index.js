const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname, "/public/css"))); // this will be used to serve static files like images, css files etc. (like "public"));
app.use(express.static(path.join(__dirname, "/public/js")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    // res.send("This is Home");
    // res.render("home.ejs");
    res.render("home"); // will work same as the above line
})

// app.get("/ig/:username", (req, res) => {
//     const followers = ['adam', 'bob', 'catlyn', 'daniel'];
//     let {username} = req.params;
//     // console.log(username);
//     res.render("instagram.ejs", {username, followers})
// })

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    // console.log(data);
    if(data){
        res.render("instagram.ejs", {data});
    }else{
        res.render("error.ejs");
    }
})

app.get("/hello", (req,res) => {
    res.send("Hello");
})

app.get("/rolldice", (req,res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rollDice.ejs", {diceVal});
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});