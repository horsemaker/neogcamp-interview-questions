import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var myStyle = {
    color: ""
  };

  var [ip, setIp] = useState("");
  var [val, setVal] = useState(myStyle);

  function convertLog() {
    if (ip !== "") {
      myStyle = { color: "black" };
      setVal(myStyle);
    }
  }

  function convertWarn() {
    if (ip !== "") {
      myStyle = { color: "yellow" };
      setVal(myStyle);
    }
  }

  function convertError() {
    if (ip !== "") {
      myStyle = { color: "red" };
      setVal(myStyle);
    }
  }

  return (
    <div className="App">
      <h1>Log Warn Error</h1>
      <textarea
        style={val}
        placeholder="Enter text here..."
        onChange={(e) => setIp(e.target.value)}
      />
      <button onClick={() => convertLog()}>Log</button>
      <button onClick={() => convertWarn()}>Warn</button>
      <button onClick={() => convertError()}>Error</button>
    </div>
  );
}
