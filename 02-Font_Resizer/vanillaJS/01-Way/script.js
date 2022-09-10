// Create a web app where I can input a text. Now create two buttons + and -. On clicking + increase the fontSize by 2px and vice versa.

const increaseFontSize = document.querySelector(
  '#increase-font-size'
);
const decreaseFontSize = document.querySelector(
  '#decrease-font-size'
);
const textInput = document.querySelector('#text-input');

const increaseFontSizeBy2px = () => {
  const style = window
    .getComputedStyle(textInput, null)
    .getPropertyValue('font-size');
  const currentSize = parseFloat(style);
  textInput.style.fontSize = `${currentSize + 2}px`;
};

const decreaseFontSizeBy2px = () => {
  const style = window
    .getComputedStyle(textInput, null)
    .getPropertyValue('font-size');
  const currentSize = parseFloat(style);
  textInput.style.fontSize = `${currentSize - 2}px`;
};

increaseFontSize.addEventListener('click', increaseFontSizeBy2px);
decreaseFontSize.addEventListener('click', decreaseFontSizeBy2px);
