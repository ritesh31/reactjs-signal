import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import { useSignal } from "@preact/signals-react";
import TodosWithState from "./components/TodosWithState";
import TodosWithSignal from "./components/TodosWithSignal";

function App() {
  console.log("App");
  const [todos, setTodos] = useState([
    { id: "1", title: "Task-1" },
    { id: "2", title: "Task-2" },
    { id: "3", title: "Task-3" },
  ]);

  // const todos = useSignal([
  //   { id: "1", title: "Task-1" },
  //   { id: "2", title: "Task-2" },
  //   { id: "3", title: "Task-3" },
  // ]);

  const handleAddNewTodo = (newTodo) => {
    setTodos([...todos, { id: 4, title: newTodo }]);
    // todos.value = [...todos.value, { id: 4, title: newTodo }];
  };

  return (
    <div className="container">
      <Navbar todos={todos} />
      <div className="">
        <TodosWithState todos={todos} handleNewTodo={handleAddNewTodo} />
        {/* <TodosWithSignal todos={todos} handleNewTodo={handleAddNewTodo} /> */}
      </div>
    </div>
  );
}

export default App;
