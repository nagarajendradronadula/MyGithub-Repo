const mongoose = require("mongoose");
const Todo = require("./models/todos");

main().then(() => console.log("Connection succesful")).catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/todos');
}

let allTodos = [
    {
        content: "Buy milk",
        created_at: new Date(),
    },
    {
        content: "Buy eggs",
        created_at: new Date(),
    },
    {
        content: "Buy bread",
        created_at: new Date(),
    },
];

Todo.insertMany(allTodos);