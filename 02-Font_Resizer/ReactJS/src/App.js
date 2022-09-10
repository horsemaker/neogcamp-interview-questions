import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [fontSize, setFontSize] = useState(16);

  const handleOperations = (event) => {
    let newFontSize;
    switch (event.target.id) {
      case 'increase':
        newFontSize = fontSize + 2;
        break;
      case 'decrease':
        newFontSize = fontSize - 2;
        break;
      default:
        return;
    }
    setFontSize(newFontSize);
  };

  return (
    <div className="App">
      <h1>Font Resizer</h1>
      <textarea
        name="input-text"
        id="input-text"
        cols="30"
        rows="10"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      ></textarea>
      <br />
      <div id="operations" onClick={handleOperations}>
        <button id="increase">+ Increase Font Size</button>
        <button id="decrease">- Decrease Font Size</button>
      </div>
      <br />
      <div id="output" style={{ fontSize: `${fontSize}px` }}>
        {input}
      </div>
    </div>
  );
}

export default App;
