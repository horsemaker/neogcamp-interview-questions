import "./styles.css";

import React, { useState } from "react";
export default function App() {
  var myStyle = {
    border: "1px solid black"
  };
  var [input_text, set_input_text] = useState(myStyle);
  function border_5px() {
    myStyle = { border: "5px solid black" };
    set_input_text(myStyle);
  }

  function border_10px() {
    myStyle = { border: "10px solid black" };
    set_input_text(myStyle);
  }

  function border_reset() {
    myStyle = { border: "1px solid black" };
    set_input_text(myStyle);
  }

  return (
    <div className="App">
      <h1>Border Resizer</h1>
      <h3 style={input_text}>Neha Aadke</h3>
      <button onClick={() => border_5px()}>5px</button>
      <button onClick={() => border_10px()}>10px</button>
      <button onClick={() => border_reset()}>Reset</button>
    </div>
  );
}
