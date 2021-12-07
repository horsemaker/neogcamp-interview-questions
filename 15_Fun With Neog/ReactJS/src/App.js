import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [ip, setIp] = useState("");
  var [op, setOp] = useState("");
  function giveOutput() {
    var name = ip.toLowerCase();

    if (name === "tanvi") {
      setOp("She is the best CEO ever!");
    } else if (name === "tanay") {
      setOp("He is our FUNNY mentor!");
    } else if (name === "swapnil") {
      setOp("He helps us CONQUER jobs!");
    } else if (name === "akanksha") {
      setOp("She is our CHEERFUL Interviewer!");
    } else {
      setOp("Invalid Input! :(");
    }
  }

  return (
    <div className="App">
      <h1>Fun with neog!!!</h1>
      <input placeholder="Enter name" onChange={(e) => setIp(e.target.value)} />
      <button onClick={() => giveOutput()}>Click</button>
      <div>{op}</div>
    </div>
  );
}
