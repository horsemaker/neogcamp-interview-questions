import "./styles.css";
import React, { useState } from "react";

var otp = "";
export default function App() {
  var myStyle = {
    color: ""
  };

  var [ip1, setIp1] = useState("");
  var [ip2, setIp2] = useState("");
  var [op1, setOp1] = useState("");
  var [val, setVal] = useState(myStyle);
  var [result, setResult] = useState("");

  var url = "https://otpgenerator.ishanjirety.repl.co/get-otp?name=";

  function getApi() {
    fetch(url + ip1)
      .then((res) => res.json())
      .then((json) => {
        otp = json.otp;
        setOp1(otp);
      });
  }

  function validate() {
    if (ip2 === otp) {
      myStyle = { color: "green" };
      setVal(myStyle);
      setResult("Success");
    } else {
      myStyle = { color: "red" };
      setVal(myStyle);
      setResult("Error");
    }
  }

  return (
    <div className="App">
      <h1>OPT Validator</h1>
      <input
        placeholder="Enter your name..."
        onChange={(e) => setIp1(e.target.value)}
      />
      <button onClick={() => getApi()}>Get OTP</button>
      <div>OTP: {op1}</div>
      <input
        placeholder="Enter OTP here"
        onChange={(e) => setIp2(e.target.value)}
      />
      <button onClick={() => validate()}>Verify OTP</button>
      <div style={val}>{result}</div>
    </div>
  );
}
