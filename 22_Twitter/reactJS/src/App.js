import "./styles.css";

import React, { useState } from "react";
var counter = 30;
var store = [];
var p = 0;
export default function App() {
  var myStyle = {
    color: "black"
  };
  const [input_text, set_input_text] = useState(myStyle);
  var [text, set_text] = useState("");
  const [content, set_content] = useState("");
  const [value, set_value] = useState(true);

  function count(txt) {
    text = txt;
    set_text(text);
    counter = 30 - text.length;

    if (counter === 15) {
      myStyle = { color: "yellow" };
      set_input_text(myStyle);
    } else if (counter <= 0) {
      myStyle = { color: "red" };
      set_input_text(myStyle);
    } else if (counter > 15) {
      myStyle = { color: "black" };
      set_input_text(myStyle);
    }
    if (counter <= 0 || counter === 30) {
      set_value(true);
    } else {
      set_value(false);
    }
  }

  function text_Content() {
    store[p] = text;
    p++;
    var x = content;
    console.log(store);
    for (var i = 0; i < store.length; i++) {
      set_content(x + "\n" + store[i]);
    }
  }

  return (
    <div className="App">
      <h1>Twitter</h1>
      <textarea
        rows="5"
        cols="50"
        placeholder="Enter something here..."
        onInput={(event) => count(event.target.value)}
      ></textarea>
      <button disabled={value} onClick={() => text_Content()}>
        Submit
      </button>
      <div>
        Characters: <label style={input_text}>{counter}</label>
      </div>
      <div className="output">{content}</div>
    </div>
  );
}
