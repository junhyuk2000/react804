import "./App.css";
import { useState, useReducer } from "react";

function App() {
  const [number, setNumber] = useState(1);

  function countReducer(oldCount, action) {
    if (action.type === "UP") {
      return oldCount + action.number;
    } else if (action.type === "DOWN") {
      return oldCount - action.number;
    } else if (action.type === "RESET") {
      return 0;
    }
  }

  const [count, countDispatch] = useReducer(countReducer, 0);
  function down() {
    countDispatch({ type: "DOWN", number: number });
  }
  function reset() {
    countDispatch({ type: "RESET", number: number });
  }
  function up() {
    countDispatch({ type: "UP", number: number });
  }

  function changeNumber(e) {
    return setNumber(Number(e.target.value));
  }
  return (
    <div>
      <button onClick={down}>-</button>
      <button onClick={reset}>0</button>
      <button onClick={up}>+</button>
      <span>{count}</span>
      <input type="text" value={number} onChange={changeNumber} />
      {number}
    </div>
  );
}

export default App;
