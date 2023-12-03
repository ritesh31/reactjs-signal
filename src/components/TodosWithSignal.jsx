import React from "react";
import { useSignal } from "@preact/signals-react";
import List from "./List";

function TodosWithSignal() {
  const newTodo = useSignal(null);
  const todos = useSignal([
    { id: 1, name: "Ritesh" },
    { id: 2, name: "Atish" },
    { id: 3, name: "Arjun" },
  ]);

  const addNewTodo = () => {
    console.log(newTodo);
    todos.value = [...todos.value, { id: 4, name: newTodo }];
  };

  return (
    <div className="">
      <h3>Todos (Signals)</h3>
      <div className="box">
        <input type="text" onChange={(e) => (newTodo.value = e.target.value)} />
        <button onClick={addNewTodo}>newTodo</button>
        <List list={todos.value} isSignal={false} />
        {/* {todos.value.map((todo, index) => (
          <p key={index}>{todo.name}</p>
        ))} */}
      </div>
    </div>
  );
}

export default TodosWithSignal;
