import "./App.css";
import ComputedSignal from "./components/computed/ComputedSignal";
import ComputedState from "./components/computed/ComputedState";

function App() {
  return (
    <div className="container">
      <h3>App component</h3>
      <div className="flex">
        <ComputedState />
        <ComputedSignal />
      </div>
    </div>
  );
}

export default App;
