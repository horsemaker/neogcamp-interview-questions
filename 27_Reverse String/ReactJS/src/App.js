import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [ip, setIp] = useState("");
  var [op, setOp] = useState("");

  function reverseString() {
    if (ip) {
      setOp(ip.split("").reverse().join(""));
    } else {
      setOp("Please enetr something....");
    }
  }
  return (
    <div className="App">
      <h1>Reverse String</h1>
      <input
        placeholder="Enter a string"
        onChange={(e) => setIp(e.target.value)}
      />
      <button onClick={() => reverseString()}>Reverse</button>
      <div>{op}</div>
    </div>
  );
}
