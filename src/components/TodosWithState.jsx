import React, { useState } from "react";
import List from "./List";

function TodosWithState({ todos, handleNewTodo }) {
  console.log('Todo State')
  const [newTodo, setNewTodo] = useState(null);
  // const [todos, setTodos] = useState([
  //   { id: 1, name: "Ritesh" },
  //   { id: 2, name: "Atish" },
  //   { id: 3, name: "Arjun" },
  // ]);

  const addNewTodo = () => {
    // setTodos([...todos, { id: 4, name: newTodo }]);
    handleNewTodo(newTodo)
  };

  return (
    <div className="container">
      <h3>Todos (State)</h3>
      <div className="box">
        <input type="text" onChange={(e) => setNewTodo(e.target.value)} className="input-field" />
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
