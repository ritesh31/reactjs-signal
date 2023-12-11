import React from "react";

function Navbar({ todos }) {
  console.log("Navbar");
  return (
    <div>
      <h3>Navbar Component</h3>
      <p>Total Todos: {todos?.length}</p>
    </div>
  );
}

export default Navbar;
