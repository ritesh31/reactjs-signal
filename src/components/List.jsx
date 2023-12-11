import React from "react";

function List({ list, isSignal }) {
  return (
    <div>
      {isSignal
        ? list?.value?.map((todo, index) => <p key={index}>{todo.title}</p>)
        : list?.map((ele, index) => <p key={index}>{ele.title}</p>)}
    </div>
  );
}

export default List;
