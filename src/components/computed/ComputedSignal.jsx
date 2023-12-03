import { useComputed, useSignal } from "@preact/signals-react";

function ComputedSignal() {
  const name = useSignal("Preact signal");
  const number = useSignal(1);
  // Do expensive calculation and return.
  const double = useComputed(() => number.value * 2);
  
  return (
    <div className="container">
      <div className="box">
        <h4>useComputed()</h4>
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

        <button onClick={() => number.value++}>Number++</button>
      </div>
      <div className="box">
        <p>{name}</p>
        <button onClick={() => (name.value = "Signal-changed")}>
          Change Name
        </button>
      </div>
    </div>
  );
}

export default ComputedSignal;
