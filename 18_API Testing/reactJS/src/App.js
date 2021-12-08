import "./styles.css";

import React, { useState } from "react";
export default function App() {
  var [output, set_output] = useState("");

  function call_API() {
    var serverURL = "https://mystery-api.kushanksriraj.repl.co/get";
    fetch(serverURL).then((response) => {
      if (response.status === 404) {
        set_output("Page Not Found!!");
        // console.log(response.status);
      } else if (response.status === 401) {
        set_output("You're Not Logged In");
        // console.log(response.status);
      } else if (response.status === 200) {
        set_output("API Is Working 🥳");
        // console.log(response.status);
      }
    });
  }

  return (
    <div className="App">
      <h1>API Testing</h1>
      <button onClick={() => call_API()}>Test</button>
      <div>{output}</div>
    </div>
  );
}
