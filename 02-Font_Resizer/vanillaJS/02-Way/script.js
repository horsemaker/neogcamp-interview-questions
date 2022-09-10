// Create a web app where I can input a text. Now create two buttons + and -. On clicking + increase the fontSize by 2px and vice versa.

const textInput = document.querySelector('#text-input');
const operations = document.querySelector('#operations');
const output = document.querySelector('#output');

const handleTextInput = () => {
  output.innerText = textInput.value;
};

textInput.addEventListener('input', handleTextInput);

const handleFontSizeOperations = (event) => {
  let currentFontSize, newFontSize;
  switch (event.target.id) {
    case 'increase':
      currentFontSize = parseFloat(
        window
          .getComputedStyle(output, null)
          .getPropertyValue('font-size')
      );
      newFontSize = currentFontSize + 2;
      break;
    case 'decrease':
      currentFontSize = parseFloat(
        window
          .getComputedStyle(output, null)
          .getPropertyValue('font-size')
      );
      newFontSize = currentFontSize - 2;
      break;
    default:
      return;
  }
  output.style.fontSize = `${newFontSize}px`;
};

operations.addEventListener('click', handleFontSizeOperations);
