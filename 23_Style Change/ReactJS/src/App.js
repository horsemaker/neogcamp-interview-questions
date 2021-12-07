import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var myStyle = {
    fontStyle: "",
    fontWeight: "",
    textDecorationLine: ""
  };
  var [ip, setIp] = useState("");
  var [val, setVal] = useState(myStyle);
  var [result, setResult] = useState("");

  function changeStyle(op) {
    setResult(ip);
    if (op === "bold") {
      myStyle = { fontWeight: "bold" };
      setVal(myStyle);
    }
    if (op === "italics") {
      myStyle = { fontStyle: "italic" };
      setVal(myStyle);
    }
    if (op === "underline") {
      myStyle = { textDecorationLine: "underline" };
      setVal(myStyle);
    }
  }
  return (
    <div className="App">
      <h1>Style Change</h1>
      <input
        placeholder="Enter text here"
        onChange={(e) => setIp(e.target.value)}
      />
      <button id="btnB" onClick={() => changeStyle("bold")}>
        Bold
      </button>
      <button id="btnI" onClick={() => changeStyle("italics")}>
        Italics
      </button>
      <button id="btnU" onClick={() => changeStyle("underline")}>
        Underline
      </button>
      <div style={val}>{result}</div>
    </div>
  );
}
