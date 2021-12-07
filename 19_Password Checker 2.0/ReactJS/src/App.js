import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [ip11, setIp11] = useState("");
  var [ip12, setIp12] = useState("");
  var [op1, setOp1] = useState("");

  var [ip21, setIp21] = useState("");
  var [ip22, setIp22] = useState("");
  var [op2, setOp2] = useState("");

  function checkPassword1() {
    var name1 = ip11.toLowerCase();
    var password1 = ip12;
    if (name1 && password1) {
      if (password1.includes(name1)) {
        setOp1("Password can't have name");
      } else {
        setOp1("OKAY TO GO!!");
      }
    } else {
      setOp1("Enter value first!");
    }
  }

  function checkPassword2(txt) {
    ip22 = txt;
    setIp22(ip22);
    var name2 = ip21.toLowerCase();
    var password2 = ip22;
    if (name2 !== "" && password2 !== "") {
      if (password2.includes(name2)) {
        setOp2("Password can't have name");
      } else {
        setOp2("OKAY TO GO!!");
      }
    } else {
      setOp2("");
    }
  }

  return (
    <div className="App">
      <h1>Password Checker 2.0</h1>
      <h2>One Way</h2>
      <label>
        Name:
        <input onChange={(e) => setIp11(e.target.value)}></input>
      </label>
      <label>
        Password:
        <input onChange={(e) => setIp12(e.target.value)}></input>
      </label>
      <button onClick={() => checkPassword1()}>Check</button>
      <div>{op1}</div>

      <h2>Second Way</h2>
      <label>
        Name:
        <input onChange={(e) => setIp21(e.target.value)}></input>
      </label>
      <label>
        Password:
        <input onChange={(e) => checkPassword2(e.target.value)}></input>
      </label>
      <div>{op2}</div>
    </div>
  );
}
