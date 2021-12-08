import "./styles.css";

import React, { useState } from "react";
export default function App() {
  var [message, set_message] = useState("");

  var serverURL = "https://datausa.io/api/data";

  function error_message() {
    fetch(serverURL)
      .then((response) => response.json())
      .then((json) => {
        message = "Error: " + json.error;
        if (message !== "undefined") {
          set_message(message);
        } else {
          set_message("Error");
        }
      });
  }

  return (
    <div className="App">
      <h1>API Error Message</h1>
      <button onClick={() => error_message()}>Api Call</button>
      <div>{message}</div>
    </div>
  );
}
