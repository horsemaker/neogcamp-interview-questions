import "./styles.css";
import React, { useState } from "react";

export default function App() {
  // var CustomTag = "p";
  const [text, set_text] = useState("");
  var [CustomTag, set_CustomTag] = useState("p");

  function tag_H1() {
    set_CustomTag("h1");
  }

  function tag_H2() {
    set_CustomTag("h2");
  }

  function tag_H3() {
    set_CustomTag("h3");
  }
  function tag_reset() {
    set_CustomTag("p");
  }

  return (
    <div className="App">
      <h1>Heading Resizer 2.0</h1>
      <textarea
        rows="3"
        cols="50"
        placeholder="Enter something here..."
        onChange={(e) => set_text(e.target.value)}
      ></textarea>
      <button onClick={() => tag_H1()}>H1</button>
      <button onClick={() => tag_H2()}>H2</button>
      <button onClick={() => tag_H3()}>H3</button>
      <button onClick={() => tag_reset()}>Reset</button>
      <CustomTag>{text}</CustomTag>
    </div>
  );
}
