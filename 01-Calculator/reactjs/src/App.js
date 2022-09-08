import { useState } from 'react';

function App() {
  const [numberInputs, setNumberInputs] = useState({
    numberOne: '',
    numberTwo: '',
  });
  const [result, setResult] = useState();

  const { numberOne, numberTwo } = numberInputs;

  const handleOperation = (event) => {
    let newResult;

    switch (event.target.id) {
      case 'addition':
        newResult = Number(numberOne) + Number(numberTwo);
        break;
      case 'subtraction':
        newResult = Number(numberOne) - Number(numberTwo);
        break;
      case 'multiplication':
        newResult = Number(numberOne) * Number(numberTwo);
        break;
      case 'division':
        newResult = Number(numberOne) / Number(numberTwo);
        break;
      default:
        return;
    }

    setResult(newResult);
  };

  return (
    <div className="App">
      <div>
        <label htmlFor="number-one">Enter first number:</label>
        <input
          type="number"
          name="numbe-one"
          id="number-one"
          value={numberOne}
          onChange={(event) =>
            setNumberInputs({
              ...numberInputs,
              numberOne: event.target.value,
            })
          }
        />
      </div>
      <br />
      <div>
        <label htmlFor="number-two">Enter second number:</label>
        <input
          type="number"
          name="number-two"
          id="number-two"
          value={numberTwo}
          onChange={(event) =>
            setNumberInputs({
              ...numberInputs,
              numberTwo: event.target.value,
            })
          }
        />
      </div>
      <br />
      <div id="operations" onClick={handleOperation}>
        <span>Operation:</span>
        <button id="addition">+</button>
        <button id="subtraction">-</button>
        <button id="multiplication">*</button>
        <button id="division">/</button>
      </div>
      <div>
        <p id="output">Result: {result}</p>
      </div>
    </div>
  );
}

export default App;
