// Create an Input Element, which shows a display message according to the Input text with the click of a button. If you type -
// "Tanvi" - then show, "She is the best CEO ever!"
// "Tanay" - then show, "He is our FUNNY mentor!"
// "Swapnil" - then show, "He helps us CONQUER jobs!"
// "Akanksha" - then show, "She is our CHEERFUL Interviewer!"

var nameField = document.querySelector('#name')
var button = document.querySelector('#button')
var outputDiv = document.querySelector('#output')
// console.log(button)

function giveOutput() {
  // console.log('hey')
  // console.log(nameField.value)
  var name = nameField.value.toLowerCase()

  if (name === 'tanvi') {
    outputDiv.textContent = 'She is the best CEO ever!'
  } else if (name === 'tanay') {
    outputDiv.textContent = 'He is our FUNNY mentor!'
  } else if (name === 'swapnil') {
    outputDiv.textContent = 'He helps us CONQUER jobs!'
  } else if (name === 'akanksha') {
    outputDiv.textContent = 'She is our CHEERFUL Interviewer!'
  } else {
    outputDiv.textContent = 'Invalid Input! :('
  }
}

button.addEventListener('click', giveOutput)
