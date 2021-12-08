import "./styles.css";

import React, { useState } from "react";
var i = 0;
var val = 0;
export default function App() {
  var myStyle = {
    color: "black"
  };
  var colors = ["red", "green", "blue", "cyan", "brown"];
  const [input_text, set_input_text] = useState(myStyle);
  const [text, set_text] = useState("");

  function color_change_start() {
    val = setInterval(function change() {
      if (text !== "") {
        myStyle = { color: colors[i] };
        set_input_text(myStyle);
        if (i === colors.length - 1) {
          i = -1;
        }
        i = i + 1;
      }
    }, 1000);
  }

  function color_change_stop() {
    if (text !== "") {
      clearInterval(val);
    }
  }

  return (
    <div className="App">
      <h1>Color Changer 2.0</h1>
      <textarea
        rows="2"
        cols="2"
        placeholder="Enter something here..."
        style={input_text}
        onChange={(event) => set_text(event.target.value)}
      ></textarea>
      <button onClick={() => color_change_start()}>Start</button>
      <button onClick={() => color_change_stop()}>Stop</button>
    </div>
  );
}
