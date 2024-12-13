import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <div className="p-10 m-10 bg-orange-100">
        <p>hello from yash</p>
      </div>
    </>
  );
}

export default App;
