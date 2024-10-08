import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), isDone: false }]);
  let [newTodo, setNewTodo] = useState("");

  let styles = {
    textDecorationLine: "line-through",
  };

  let addNewTask = () => {
    // console.log("we have to add task");
    // setTodos([...todos, {task: newTodo, id: uuidv4()}]);
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };

  let updateTodo = (event) => {
    // console.log(event.target.value);
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    // console.log(id);
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    // console.log(newTodo);
  };

  let upperCAseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        // console.log(todo);
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let upperCaseOne = (id) => {
    // console.log(id);
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        // console.log(todo);
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let markAsDone = (id) => {
    // console.log(id);
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        // console.log(todo);
        if (todo.id === id) {
          return {
            ...todo,
            isDone: true,
          }
        } else {
          return todo;
        }
      })
    );
  };

  let allTasksDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        // console.log(todo);
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  return (
    <div>
      <input placeholder="Type a Task" value={newTodo} onChange={updateTodo} />

      <br />
      <button onClick={addNewTask}>Add Task</button>

      <br />
      <br />
      <hr />
      <h3>Tasks to be Done!</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? styles : {}}>{todo.task}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => upperCaseOne(todo.id)}>UpperCase One</button>
            <button onClick={() => markAsDone(todo.id)}>Done</button>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <hr />

      <button onClick={upperCAseAll}>Upper Case All</button>&nbsp;&nbsp;&nbsp;
      <button onClick={allTasksDone}>All Tasks Done</button>
    </div>
  );
}
