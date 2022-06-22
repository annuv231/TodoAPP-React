import "./App.css";
import React, { useState, useEffect } from "react";
let globalId = 0;
function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  function createTodo(event) {
    event.preventDefault();
    setTodos((oldTodos) => {
      setTask("");
      return [...oldTodos, { todo: task, id: globalId++ }];
    });
  }
  function deleteTodo(itemID) {
    // console.log("test");
    setTodos((oldTodos) => oldTodos.filter((item) => item.id !== itemID));
  }
  //setup EnterKey todo add functionality
  // function checkForEnterKey(e) {
  //   if (e.keyCode === 13) {
  //     createTodo();
  //   }
  // }
  return (
    // <div>
    //   <h1>React Todo APP</h1>
    //   {/* to make input field dynamic we will add onChange() method */}
    //   <input
    //     type="text"
    //     value={task}
    //     onChange={(e) => {
    //       setTask(e.target.value);
    //     }}
    //     onKeyDown={checkForEnterKey}
    //   />
    //   <button onClick={createTodo}>Creat Todo</button>
    //   <ul>
    //     {todos.map((todo) => {
    //       return <li>{todo}</li>;
    //     })}
    //   </ul>
    // </div>
    <div>
      <h1>React Todo APP</h1>
      {/* to make input field dynamic we will add onChange() method */}
      <form onSubmit={createTodo}>
        <input
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button type="submit">Creat Todo</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <div>
              <li>{todo.todo}</li>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
