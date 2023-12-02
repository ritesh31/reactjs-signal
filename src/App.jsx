import "./App.css";
import { useSignal, effect } from "@preact/signals-react";

function App() {
  const countSignal = useSignal(0);

  effect(() => {
    console.log("Inside effect");
  });

  return (
    <div className="container">
      <h3>App component</h3>
      <div className="inner-container">
        <div className="box">
          <p>
            <strong>Signal Counter: </strong>
            {countSignal}
          </p>
          <button onClick={() => countSignal.value++}>Signal Count++</button>
        </div>
      </div>
      {/* <ChildOne countState={countState} countSignal={countSignal} /> */}
    </div>
  );
}

export default App;

// Using effect()
// We don't have to pass dependencies array like the useEffect hook. 
// It'll automatically detect dependencies and call effect only when we accessing signal value.
// Ex. 
//  effect will not call bcoz we have no used any signal value
//  effect(() => {
//    console.log("Inside effect");
//  });

//  effect will call bcoz we have no used any signal value
//  effect(() => {
//    console.log("Inside effect", countSignal.value);
//  });
