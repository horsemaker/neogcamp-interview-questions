import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [text, setText] = useState("");
  var [vowel, setVowel] = useState("");
  var [cons, setCons] = useState("");

  var v = 0;
  var c = 0;

  function findVC(txt) {
    text = txt;
    setText(text);
    if (text !== "") {
      for (var i = 0; i < text.length; i++) {
        if (
          text[i] === "a" ||
          text[i] === "e" ||
          text[i] === "i" ||
          text[i] === "o" ||
          text[i] === "u"
        ) {
          v++;
        } else {
          c++;
        }
      }
    }
    setCons(c);
    setVowel(v);
  }
  return (
    <div className="App">
      <h1>Vowels & Consonants</h1>
      <input onChange={(e) => findVC(e.target.value)} />
      <div>
        Vowels: {vowel} Consonants: {cons}
      </div>
    </div>
  );
}
