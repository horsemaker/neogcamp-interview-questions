import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  var myTag = {
    color: "",
    backgroundColor: ""
  };
  var [tag, setTag] = useState(myTag);
  var [tag1, setTag1] = useState(myTag);
  var [val, setVal] = useState(true);
  var [valb, setValb] = useState(true);
  var [text, setText] = useState("");
  var [textb, setTextb] = useState("");
  var [result, setResult] = useState("");

  function testOne() {
    var input = text;
    if (input === "") {
      myTag = { color: "red" };
      setTag(myTag);
      setResult("Please enter a password");
    } else if (input.length < 10) {
      myTag = { color: "red" };
      setTag(myTag);
      setResult("Minimum 10 character required");
    } else {
      myTag = { color: "green" };
      setTag(myTag);
      setResult("Submit!!!");
    }
  }

  function testTwo(txt) {
    text = txt;
    setText(text);
    if (text.length >= 10) {
      setVal(false);
    } else {
      setVal(true);
    }
  }

  function testThree(txt) {
    text = txt;
    setText(text);
    if (text.length < 10) {
      myTag = { backgroundColor: "red" };
      setTag1(myTag);
    } else if (text.length >= 10) {
      myTag = { backgroundColor: "green" };
      setTag1(myTag);
    } else {
      myTag = { backgroundColor: "red" };
      setTag1(myTag);
    }
  }

  function testBonus(txt) {
    textb = txt;
    setTextb(textb);
    if (textb.length >= 10) {
      setValb(false);
    } else {
      setValb(true);
    }
  }

  return (
    <div className="App">
      <h1>Password Checker</h1>
      <h2>Test one</h2>
      <input onChange={(e) => setText(e.target.value)} />
      <button id="btn1" onClick={() => testOne()}>
        Submit
      </button>
      <div style={tag}>{result}</div>

      <h2>Test two</h2>
      <input onChange={(e) => testTwo(e.target.value)} />
      <button id="btn2" disabled={val}>
        Submit
      </button>

      <h2>Test Three</h2>
      <input style={tag1} onChange={(e) => testThree(e.target.value)} />
      <button id="btn3">Submit</button>

      <h2>Bonus</h2>
      <input type="password" onChange={(e) => testBonus(e.target.value)} />
      <button id="btn4" disabled={valb}>
        Submit
      </button>
    </div>
  );
}
