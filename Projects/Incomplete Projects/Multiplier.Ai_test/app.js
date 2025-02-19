const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Todo = require("./models/todos"); // Make sure your model is properly defined

const mongoUrl = "mongodb://127.0.0.1:27017/todos";

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

mongoose.connect(mongoUrl)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch(err => {
    console.log("Database connection error:", err);
  });

app.get("/todos", async (req, res) => {
  try {
    let todos = await Todo.find();
    res.render("index.ejs", { todos });
  } catch (err) {
    console.log("Error fetching todos:", err);
    res.status(500).send("Error fetching todos");
  }
});

app.post("/todos", async (req, res) => {
  let { content } = req.body;
  let newTodo = new Todo({
    content: content,
    created_at: new Date(),
  });

  try {
    await newTodo.save();
    console.log("Todo has been saved");
    res.redirect("/todos");
  } catch (err) {
    console.log("Error saving todo:", err);
    res.status(500).send("Error saving todo");
  }
});

app.delete("/todos/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let deletedTodo = await Todo.findByIdAndDelete(id);
    console.log("Deleted Todo:", deletedTodo);
    res.redirect("/todos");
  } catch (err) {
    console.log("Error deleting todo:", err);
    res.status(500).send("Error deleting todo");
  }
});

app.listen(3050, () => {
  console.log("Server started on port 3050");
});
