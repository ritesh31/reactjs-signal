import { memo } from "react";
import ChildTwo from "./ChildTwo";

const ChildOne = function ChildOne({ countState, countSignal }) {
  return (
    <div className="container">
      <h4>ChildOne</h4>

      <ChildTwo countState={countState} countSignal={countSignal} />
    </div>
  );
};

export default ChildOne;
