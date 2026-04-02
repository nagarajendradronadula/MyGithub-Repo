// import { useSelector } from "react-redux";
// import NewTodo from "./NewTodo.jsx";
// import { useDispatch } from "react-redux";
// import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

// export default function Todo() {
//   const todos = useSelector((state) => state.todos);
//   console.log(todos);
//   const dispatch = useDispatch();

//   const deleteTodoHandler = (id) => {
//     console.log("delete", id);
//     dispatch(deleteTodo(id));
//   };
//   const markAsDoneHandler = (id) => {
//     console.log("delete", id);
//     dispatch(markAsDone(id));
//   };

//   return (
//     <>
//       <NewTodo />
//       <h3>Todo List App</h3>
//       <ul>
//         {todos.map((todo) => {
//          <li key={todo.id} style={todo.isDone ? { textDecorationLine: "line-through" } : {}}> {todo.task}
//           <button onClick={() => deleteTodoHandler(todo.id)}>Delete</button>
//           <button onClick={() => markAsDoneHandler(todo.id)}>Mark as Done</button>
//           </li>
//         })}
//       </ul>
//     </>
//   );
// }


import { useSelector } from "react-redux";
import NewTodo from "./NewTodo.jsx";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();

  const deleteTodoHandler = (id) => {
    console.log("delete", id);
    dispatch(deleteTodo(id));
  };

  const markAsDoneHandler = (id) => {
    console.log("mark as done", id);
    dispatch(markAsDone(id));
  };

  return (
    <>
      <NewTodo />
      <h3>Todo List App</h3>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={todo.isDone ? { textDecoration: "line-through" } : {}}
          >
            {todo.task}
            <button onClick={() => deleteTodoHandler(todo.id)}>Delete</button>
            <button onClick={() => markAsDoneHandler(todo.id)}>Mark as Done</button>
          </li>
        ))}
      </ul>
    </>
  );
}
