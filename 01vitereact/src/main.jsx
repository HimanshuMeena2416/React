import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MYApp() {
  return <h1>Hello brother! </h1>;
}

// const ReactElement = {
//   //ye voh elemet hai jo react khud se banata hai jb fun import hokr yaha aata
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit Google",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const anotherUser = "rajmahal";
const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click me to visit google",
  anotherUser //evaluated expression. you cant write whole js here
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
