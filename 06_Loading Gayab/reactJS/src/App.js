import "./styles.css";

import React, { useState } from "react";
export default function App() {
  var [text, set_text] = useState("loading...");

  function text_visibility() {
    if (text !== "") {
      text = "";
      set_text(text);
    }
  }

  return (
    <div className="App">
      <h3>{text}</h3>
      <button onClick={() => text_visibility()}>loaded</button>
    </div>
  );
}
