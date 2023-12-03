import React, { useState, useMemo } from "react";

function ComputedState() {
  const [number, setNumber] = useState(1);
  const double = useMemo(() => {
    // Do expensive calculation and return.
    return number * 2;
  }, [number]);

  return (
    <div className="container">
      <div className="box">
        <h4>Computed Value Using State()</h4>
        <p>
          <span className="mr-2">
            <strong>Number: </strong>
            {number}
          </span>
          <span>
            <strong>Number x 2 = </strong>
            {double}
          </span>
        </p>

        <button onClick={() => setNumber(number + 1)}>Number++</button>
      </div>
    </div>
  );
}

export default ComputedState;
