import { useEffect,  useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component did mount");
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  useEffect(() => {
    console.log("Count has changed:", count);
  }, [count]);

  const handleButtonClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleButtonClick}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
