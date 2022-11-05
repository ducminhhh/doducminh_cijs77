
import "../src/assetss/css/app.css"
import { useState } from "react";


function App() {
  const [color, setColor] = useState("red")
  const changeColor = () => {
    if (color === "red") {
      setColor("yellow")
    }
    else if (color === "yellow") {
      setColor("green")
    }
    else if (color === "green") {
      setColor("red")
    }

  }

  return (
    <div className="App">
      <button className="title" onClick={changeColor}>Next</button><br />
      <button className={`btn ${color === "red" ? "red" : ""}`}></button>
      <button className={`btn ${color === "yellow" ? "yellow" : ""}`}></button>
      <button className={`btn ${color === "green" ? "green" : ""}`}></button>

    </div>
  );
}

export default App;
