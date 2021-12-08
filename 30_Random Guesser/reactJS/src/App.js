import "./styles.css";

import React, { useState } from "react";

export default function App() {
  const [text, set_text] = useState("");
  const [output, set_output] = useState("");

  function check() {
    var random_Number = Math.floor(Math.random() * 10 + 1);
    console.log(random_Number);
    if (text !== "") {
      if (random_Number === Number(text)) {
        set_output("Yay!! You Guessed it right 🥳");
      } else {
        set_output("Oops!! Wrong Guess 😬");
      }
    }
  }

  return (
    <div className="App">
      <h1>Random Number Guesser</h1>
      <h3>Welcome Players!!</h3>
      <h5>
        Here you need to guess a number between 1 to 10 <br />
        If your guessed number matches with the random number generated <br />
        then you win or else you lose
      </h5>
      <input type="number" onChange={(event) => set_text(event.target.value)} />
      <button onClick={() => check()}>Check</button>
      <div>
        Result: <label>{output}</label>
      </div>
      <div></div>
    </div>
  );
}
