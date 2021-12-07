import "./styles.css";

import React, { useState } from "react";
var namepower1 = 0;
var namepower2 = 0;
export default function App() {
  const [output1, set_output1] = useState("");
  const [output2, set_output2] = useState("");
  const [output3, set_output3] = useState("");
  const [output4, set_output4] = useState("");
  var player1 = {
    name: "Ram",
    age: "25",
    power: 2500,
    yuga: "Treta"
  };

  var player2 = {
    name: "Krishna",
    age: "31",
    power: 2325,
    yuga: "Dwapar"
  };

  function Name_power() {
    namepower1 = player1.name.length * 35;
    namepower2 = player2.name.length * 35;
    if (namepower1 > namepower2) {
      set_output1(player1.name + " has more Name Power than " + player2.name);
    } else if (namepower1 < namepower2) {
      set_output1(player2.name + " has more Name Power than " + player1.name);
    } else {
      set_output1(
        player1.name + " and " + player2.name + " both has same Name Power."
      );
    }
  }

  function Age() {
    if (player1.age > player2.age) {
      set_output2(player1.name + " is older than " + player2.name);
    } else if (player1.age < player2.age) {
      set_output2(player2.name + " is older than " + player1.name);
    } else {
      set_output2(
        player1.name + " and " + player2.name + " both are of same age."
      );
    }
  }

  function Power() {
    if (player1.power > player2.power) {
      set_output3(player1.name + " is more powerful than " + player2.name);
    } else if (player1.power < player2.power) {
      set_output3(player2.name + " is more powerful than " + player1.name);
    } else {
      set_output3(
        player1.name + " and " + player2.name + " both has same power."
      );
    }
  }

  function Total_power() {
    var totalPower1 = namepower1 + player1.power;
    var totalPower2 = namepower2 + player1.power;
    if (totalPower1 > totalPower2) {
      set_output4(player1.name + " has more total power than " + player2.name);
    } else if (totalPower1 < totalPower2) {
      set_output4(player2.name + " has more total power than " + player1.name);
    } else {
      set_output4(
        player1.name + " and " + player2.name + " both has same total power."
      );
    }
  }

  function Compete() {
    Name_power();
    Age();
    Power();
    Total_power();
  }
  return (
    <div className="App">
      <h1>Let's check who's more powerful!!</h1>
      <table>
        <th>Name</th>
        <th>Age</th>
        <th>Power</th>
        <th>Yuga</th>
        <tr>
          <td>Rama</td>
          <td>25</td>
          <td>2500</td>
          <td>Treta</td>
        </tr>
        <tr>
          <td>Krishna</td>
          <td>31</td>
          <td>2325</td>
          <td>Dwapar</td>
        </tr>
      </table>
      <button onClick={() => Compete()}>Let's Compete</button>
      <div>{output1}</div>
      <div>{output2}</div>
      <div>{output3}</div>
      <div>{output4}</div>
    </div>
  );
}
