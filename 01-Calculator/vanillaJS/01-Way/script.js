// Create a web app which would take two inputs. It would also have 4 buttons: +, -, x /. Based on the button clicked perform the operation on the two inputs. You can do this in React or vanillaJS based on your choice.

const numberOne = document.querySelector('#number-one');
const numberTwo = document.querySelector('#number-two');

const additionBtn = document.querySelector('#addition');
const subtractionBtn = document.querySelector('#subtraction');
const multiplicationBtn = document.querySelector('#multiplication');
const divisionBtn = document.querySelector('#division');

const output = document.querySelector('#output');

const add = () => {
  const result = Number(numberOne.value) + Number(numberTwo.value);
  output.innerText = `Result: ${result}`;
};

const subtract = () => {
  const result = Number(numberOne.value) - Number(numberTwo.value);
  output.innerText = `Result: ${result}`;
};

const multiply = () => {
  const result = Number(numberOne.value) * Number(numberTwo.value);
  output.innerText = `Result: ${result}`;
};

const divide = () => {
  const result = Number(numberOne.value) / Number(numberTwo.value);
  output.innerText = `Result: ${result}`;
};

addition.addEventListener('click', add);
subtraction.addEventListener('click', subtract);
multiplication.addEventListener('click', multiply);
division.addEventListener('click', divide);
