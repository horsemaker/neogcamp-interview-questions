import "./styles.css";

import React, { useState } from "react";
export default function App() {
  var myStyle = {
    color: "black"
  };
  const [input_text, set_input_text] = useState(myStyle);
  const [text, set_text] = useState("");

  function color_Red() {
    if (text !== "") {
      myStyle = { color: "red" };
      set_input_text(myStyle);
    }
  }

  function color_Green() {
    if (text !== "") {
      myStyle = { color: "green" };
      set_input_text(myStyle);
    }
  }

  function color_Blue() {
    if (text !== "") {
      myStyle = { color: "blue" };
      set_input_text(myStyle);
    }
  }

  return (
    <div className="App">
      <h1>Color Changer</h1>
      <textarea
        rows="5"
        cols="50"
        placeholder="Enter something here..."
        style={input_text}
        onChange={(event) => set_text(event.target.value)}
      ></textarea>
      <button onClick={() => color_Red()}>Red</button>
      <button onClick={() => color_Green()}>Green</button>
      <button onClick={() => color_Blue()}>Blue</button>
    </div>
  );
}
