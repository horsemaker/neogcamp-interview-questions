// Create a web app which would take two inputs. It would also have 4 buttons: +, -, x /. Based on the button clicked perform the operation on the two inputs. You can do this in React or vanillaJS based on your choice.

// Here I have used a concept called Event Delegation
// To know more about it: https://javascript.info/event-delegation
// For more examples: https://codesandbox.io/s/event-delegation-f2wwi8?file=/index.html

const numberOne = document.querySelector('#number-one');
const numberTwo = document.querySelector('#number-two');

const operations = document.querySelector('#operations');

const output = document.querySelector('#output');

const operate = (event) => {
  let result;

  switch (event.target.id) {
    case 'addition':
      result = Number(numberOne.value) + Number(numberTwo.value);
      break;
    case 'subtraction':
      result = Number(numberOne.value) - Number(numberTwo.value);
      break;
    case 'multiplication':
      result = Number(numberOne.value) * Number(numberTwo.value);
      break;
    case 'division':
      result = Number(numberOne.value) / Number(numberTwo.value);
      break;
    default:
      return;
  }

  output.innerText = `Result: ${result}`;
};

operations.addEventListener('click', operate);
