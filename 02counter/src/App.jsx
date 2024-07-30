import { useState } from "react";
//useState Hook allows us to track state in a function component.
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);
  // useState accepts an initial state and returns two values:
  // 1. The current state.
  // 2. A function that updates the state.

  //let counter = 5;
  const incValue = () => {
    if (counter < 20) {
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    }
  };
  const decValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Ha bhai test kr rhe hai</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={incValue}>Increase value</button>
      <br />
      <button onClick={decValue}>Decrease value</button>
    </>
  );
}

export default App;
