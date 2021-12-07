import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  var [text, setText] = useState("");
  var [result, setResult] = useState("");

  var serverURL = "https://api.agify.io/";

  function getTranslationURL(txt) {
    console.log(serverURL + "?" + "name=" + txt);
    return serverURL + "?" + "name=" + txt;
  }

  function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time");
  }

  function clickEventHandler() {
    var inputText = text;

    fetch(getTranslationURL(inputText))
      .then((response) => response.json())
      .then((json) => {
        var age = json.age;
        setResult(age);
      })
      .catch(errorHandler);
  }
  return (
    <div className="App">
      <h1>Working with an api</h1>
      <textarea
        placeholder="Enter your name here"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button onClick={() => clickEventHandler()}>Guess my age</button>
      <div>{result}</div>
    </div>
  );
}
