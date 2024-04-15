const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");


app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

let posts = [
    {
        id: uuidv4(),
        username:"apnacollege",
        content: "I Love Coding!"
    },
    {
        id: uuidv4(),
        username:"shardhakhapra",
        content: "Hard Work is important to acheive success"
    },
    {
        id: uuidv4(),
        username:"dnr",
        content: "Coding is my favourite subject"
    }
];

app.get("/posts", (req, res) => {
    // res.send("Server working well!");
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let id = uuidv4();
    // console.log(req.body);
    let {username, content} = req.body;
    posts.push({id, username, content})
    // res.send("Post Request working");
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    // console.log(id);
    let post = posts.find((p) => id === p.id);
    // console.log(post);
    // res.send("request working");
    res.render("show.ejs", {post});
});

app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    // console.log(newContent);
    post.content = newContent;
    console.log(post)
    // res.send("patch request working");
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});

app.delete("/posts/:id", (req, res) => {
    const {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    // res.send("Post Deleted");
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});