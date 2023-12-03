import "./App.css";
import TodosWithState from "./components/TodosWithState";
import TodosWithSignal from "./components/TodosWithSignal";
function App() {

  return (
    <div className="container">
      <h3>App component</h3>
      <div className="flex">
        <TodosWithState />
        <TodosWithSignal />
      </div>
    </div>
  );
}

export default App;
