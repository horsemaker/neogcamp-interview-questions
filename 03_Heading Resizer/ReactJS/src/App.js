import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  var myStyle = {
    fontSize: ""
  };
  var [textInput, setInput] = useState(myStyle);
  var [ip, setIp] = useState("");

  function convertToH1() {
    if (ip != "") {
      myStyle = { fontSize: "32px" };
      setInput(myStyle);
    }
  }
  function convertToH2() {
    if (ip != "") {
      myStyle = { fontSize: "24px" };
      setInput(myStyle);
    }
  }
  function convertToH3() {
    if (ip != "") {
      myStyle = { fontSize: "18px" };
      setInput(myStyle);
    }
  }
  return (
    <div className="App">
      <h1>Heading Resizer</h1>
      <textarea
        id="text-input"
        placeholder="Enter text here"
        onChange={(e) => setIp(e.target.value)}
      ></textarea>
      <br />
      <button onClick={() => convertToH1()}>h1</button>
      <button onClick={() => convertToH2()}>h2</button>
      <button onClick={() => convertToH3()}>h3</button>
      <div style={textInput}>{ip}</div>
    </div>
  );
}
