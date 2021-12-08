import "./styles.css";

import React, { useState } from "react";
export default function App() {
  var [output, set_output] = useState("");

  function call_API(input_text) {
    var serverURL =
      "https://mock-practice.prakhar10v.repl.co/bollywood?name=" + input_text;
    fetch(serverURL)
      .then((response) => response.json())
      .then((json) => {
        set_output(json.message);
      });
  }

  return (
    <div className="App">
      <h1>Movies API</h1>
      <button onClick={() => call_API("YJHD")}>YJHD</button>
      <button onClick={() => call_API("ZNMD")}>ZNMD</button>
      <div>{output}</div>
    </div>
  );
}
