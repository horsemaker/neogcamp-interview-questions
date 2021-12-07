import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [ip, setIp] = useState("");
  var [op, setOp] = useState("");

  function checkNews() {
    var ipUpperCase = ip.toUpperCase();
    if (
      ipUpperCase === "FACEBOOK" ||
      ipUpperCase === "WHATSAPP" ||
      ipUpperCase === "TELEGRAM" ||
      ipUpperCase === "FB" ||
      ipUpperCase === "TG"
    ) {
      setOp("Don't belive things on FB, WhatsApp or Telegram!");
    } else if (ipUpperCase === "") {
      setOp("Please enter your feed");
    } else {
      setOp("Legit NEWS!!!");
    }
  }
  return (
    <div className="App">
      <h1>Fake news detector</h1>
      <textarea placeholder="Enter the news:" />
      <label>
        PLease mention the source(Facebook, WhatsApp, Telegram, Others):
        <input onChange={(e) => setIp(e.target.value)} />
      </label>
      <button onClick={() => checkNews()}>Check</button>
      <div>{op}</div>
    </div>
  );
}
