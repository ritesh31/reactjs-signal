import { useState } from "react";
import "./App.css";
import ChildOne from "./components/ChildOne";
import { useSignal } from "@preact/signals-react";

function App() {
  const [countState, setCountState] = useState(0);
  const countSignal = useSignal(0);
  const [temp, setTemp] = useState("Temp");
  return (
    <div className="container">
      <h3>App component</h3>
      <div className="inner-container">
        <div className="box">
          <p>
            <strong>State Counter: </strong>
            {countState}
          </p>
          <button onClick={() => setCountState(countState + 1)}>
            State Count++
          </button>
        </div>

        <div className="box">
          <p>
            <strong>Signal Counter: </strong>
            {countSignal}
          </p>
          <button onClick={() => countSignal.value++}>Signal Count++</button>
        </div>

        <div className="box">
          <p>
            <strong>Temp: </strong>
            {temp}
          </p>
          <button onClick={() => setTemp("Temp Changed")}>Change</button>
        </div>
      </div>
      <ChildOne countState={countState} countSignal={countSignal} />
    </div>
  );
}

export default App;

// Using useState()
// 1. If we are using useState() with the help of memo() All child component re-rendered
//    because we are using parent data inside child components
//    but we need to add memo() for all child components

// 2. If we are changing state using useState() hook which are not passing to child component
//    then whole App component re-rendered

// Using useSignal()
// 1. If we are using usSignal() only value will we re-rendered not any Child component will re-rendered
//    also no need of memo()
// 2. Bcoz useSignal() passing object of signal variable
//    and object contains value so React will actually checking signal object not its value
//    that's why React noot re-rendered component
