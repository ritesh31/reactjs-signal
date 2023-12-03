import React, { useState } from "react";
import List from "./List";

function TodosWithState() {
  const [newTodo, setNewTodo] = useState(null);
  const [todos, setTodos] = useState([
    { id: 1, name: "Ritesh" },
    { id: 2, name: "Atish" },
    { id: 3, name: "Arjun" },
  ]);

  const addNewTodo = () => {
    console.log(newTodo);
    setTodos([...todos, { id: 4, name: newTodo }]);
  };

  return (
    <div className="">
      <h3>Todos (State)</h3>
      <div className="box">
        <input type="text" onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={addNewTodo}>newTodo</button>
        <List list={todos} isSignal={false} />
        {/* {todos.map((todo, index) => (
          <p key={index}>{todo.name}</p>
        ))} */}
      </div>
    </div>
  );
}

export default TodosWithState;
