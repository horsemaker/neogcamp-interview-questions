import "./styles.css";

import React, { useState } from "react";
export default function App() {
  var myStyle = {
    background: "red"
  };
  var [input1, set_input1] = useState("");
  var [input2, set_input2] = useState("");
  const [highlight1, set_highlight1] = useState();
  const [highlight2, set_highlight2] = useState();
  var [output, set_output] = useState("");

  function calculate_Result(text1, text2) {
    input1 = text1;
    input2 = text2;
    set_input1(input1);
    set_input2(input2);
    console.log(text1, text2);
    if (input1 !== "" && input2 !== "") {
      if (Number(input1) > Number(input2)) {
        set_highlight1(myStyle);
        set_highlight2();
        set_output("Input 1 is greater than input 2");
      } else if (Number(input1) < Number(input2)) {
        set_highlight2(myStyle);
        set_highlight1();
        set_output("Input 2 is greater than input 1");
      } else if (Number(input1) === Number(input2)) {
        myStyle = { background: "green" };
        set_highlight1(myStyle);
        set_highlight2(myStyle);
        set_output("Input 1 and input 2 are equal");
      }
    } else {
      myStyle = { background: "white" };
      set_highlight1(myStyle);
      set_highlight2(myStyle);
      set_output("Please Enter Both the fields");
    }
  }

  return (
    <div className="App">
      <h1>Greater Input</h1>
      <label>
        Input 1:
        <input
          style={highlight1}
          onChange={(e) => calculate_Result(e.target.value, input2)}
        />
      </label>

      <label>
        Input 2:
        <input
          style={highlight2}
          onChange={(e) => calculate_Result(input1, e.target.value)}
        />
      </label>

      <div>{output}</div>
    </div>
  );
}
