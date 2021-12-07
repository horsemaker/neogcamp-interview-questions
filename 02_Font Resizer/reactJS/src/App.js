import "./styles.css";

import React, { useState } from "react";
var size = 12;
export default function App() {
  var myStyle = {
    fontSize: size + "px"
  };
  const [input_text, set_input_text] = useState(myStyle);
  const [text, set_text] = useState("");
  const [output, set_output] = useState("");

  function Increase_size() {
    if (text !== "") {
      size = size + 2;
      myStyle = { fontSize: size + "px" };
      set_input_text(myStyle);
      set_output(text);
    }
  }

  function Decrease_size() {
    if (text !== "") {
      size = size - 2;
      myStyle = { fontSize: size + "px" };
      set_input_text(myStyle);
      set_output(text);
    }
  }

  return (
    <div className="App">
      <h1>Font Resizer</h1>
      <textarea
        rows="5"
        cols="30"
        placeholder="Enter something here..."
        onChange={(event) => set_text(event.target.value)}
      ></textarea>
      <button onClick={() => Increase_size()}>+ Increase font size</button>
      <button onClick={() => Decrease_size()}>- Decrease font size</button>
      <div style={input_text}>{output}</div>
    </div>
  );
}
