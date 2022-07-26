import "./styles.css";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [size, setSize] = useState(20);
  return (
    <div className="App">
      <h2>Enter Your Text 👇</h2>

      <input
        style={{
          padding: "15px"
        }}
        placeholder="enter your text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "20px",
          justifyContent: "center"
        }}
      >
        <button
          style={{
            fontSize: "20px",
            margin: "10px"
          }}
          onClick={() => {
            setSize(size + 2);
          }}
        >
          +
        </button>
        <button
          style={{ margin: "10px", fontSize: "20px" }}
          onClick={() => {
            setSize(size - 2);
          }}
        >
          -
        </button>
      </div>
      <div
        style={{
          fontSize: size + "px",
          padding: "15px",
          backgroundColor: "lightgray",
          
        }}
      >
        {value}
      </div>
    </div>
  );
}

