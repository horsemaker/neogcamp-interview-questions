import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [op, setOp] = useState("");
  var [op1, setOp1] = useState("");

  function fetchAPI() {
    fetch("https://randomsuser.me/api")
      .then((res) => res.json())
      .then((json) => {
        var error = json.error;
        setOp(error);
      })
      .catch((err) => {
        console.log(err);
        setOp1(err.toString());
      });
  }

  return (
    <div className="App">
      <h1>Error API</h1>
      <button onClick={() => fetchAPI()}>Fetch</button>
      <div>{op}</div>
      <div>{op1}</div>
    </div>
  );
}
