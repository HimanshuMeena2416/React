import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "himz",
    age: 22,
  };

  let myarray = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-200 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card username="himz-1" btnText="click me" />
      <Card username="himz-2" />
    </>
  );
}

export default App;
