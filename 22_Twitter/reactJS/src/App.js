import "./styles.css";
import { useState } from "react";

export default function App() {
  let counter = 30;
  const [value, setValue] = useState("");
  const [color, setColor] = useState("black");
  const [btnValue, setBtnValue] = useState(false);
  const [display, setDisplay] = useState(null);

  const inputHandler = (e) => {
    setValue(e.target.value);
    counter = counter - value.length;
    console.log(counter);
    if (counter <= 15 && counter >= 0) {
      setColor("yellow");
      setBtnValue(false);
    } else if (counter < 0) {
      setColor("red");
      setBtnValue(true);
    }
  };

  return (
    <div className="App">
      <textarea
        placeholder="enter your text"
        onInput={inputHandler}
        style={{
          color: color,
          height: "8rem",
          padding: "1rem",
          fontSize: "1rem",
          margin: "2rem",
          outline: "none"
        }}
      />
      <button
        style={{
          width: "40%",
          margin: "auto",
          padding: "1rem"
        }}
        disabled={btnValue}
        onClick={() => {
          setDisplay(value);
        }}
      >
        SUBMIT
      </button>
      <p>{display}</p>
    </div>
  );
}
