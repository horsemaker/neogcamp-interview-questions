import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [input_text, set_input_text] = useState("");
  function text_to_number(txt) {
    if (isNaN(txt) === false) {
      set_input_text(txt);
    }
  }
  return (
    <div className="App">
      <h1>Input-Text to Number</h1>
      <input
        type="text"
        onInput={(event) => text_to_number(event.target.value)}
        value={input_text}
      />
    </div>
  );
}
