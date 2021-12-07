import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [result, setResult] = useState(" ");
  const [ip1, setIp1] = useState(" ");
  const [ip2, setIp2] = useState(" ");

  function calculateResult(op) {
    if (op === "+") {
      setResult(Number(ip1) + Number(ip2));
    }
    if (op === "-") {
      setResult(Number(ip1) - Number(ip2));
    }
    if (op === "*") {
      setResult(Number(ip1) * Number(ip2));
    }
    if (op === "/") {
      if (ip1 === "0" || ip2 === "0") {
        setResult("Can't divide!!");
      } else {
        setResult(Number(ip1) / Number(ip2));
      }
    }
  }

  return (
    <div className="App">
      <h1>Calculator</h1>
      <input
        id="input1"
        placeholder="Enter number 1"
        onChange={(e) => setIp1(e.target.value)}
      />
      <br />
      <input
        id="input2"
        placeholder="Enter number 2"
        onChange={(e) => setIp2(e.target.value)}
      />
      <br />
      <button id="btn-add" onClick={() => calculateResult("+")}>
        +
      </button>
      <button id="btn-sub" onClick={() => calculateResult("-")}>
        -
      </button>
      <button id="btn-mul" onClick={() => calculateResult("*")}>
        x
      </button>
      <button id="btn-divi" onClick={() => calculateResult("/")}>
        /
      </button>
      <div id="output">{result}</div>
    </div>
  );
}
