import { memo } from "react";

const ChildTwo = function ChildTwo({ countState, countSignal }) {
  return (
    <div className="container">
      <h4>ChildTwo</h4>
      <p>State: {countState}</p>
      <p>Signal: {countSignal}</p>
    </div>
  );
};

export default ChildTwo;
