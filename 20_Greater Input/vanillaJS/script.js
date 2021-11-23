// Create two input fields where users can input numbers. Highlight the input field whose value is more (You can change the background colour for highlighting).
//  Also, print a message saying which number is the highest.
//  HOW TO CODE IT WITHOUT USING BUTTON ELEMENT

var inputOne = document.querySelector('#number-one')
var inputTwo = document.querySelector('#number-two')

function checkNumber() {
  var numberOne = Number(inputOne.value)
  var numberTwo = Number(inputTwo.value)
  // console.log(numberOne, numberTwo)

  if (numberOne > numberTwo) {
    inputOne.style.backgroundColor = 'green'
    inputTwo.style.backgroundColor = 'white'
  } else {
    inputOne.style.backgroundColor = 'white'
    inputTwo.style.backgroundColor = 'green'
  }
}

inputOne.addEventListener('input', checkNumber)
inputTwo.addEventListener('input', checkNumber)

// var inputs = document.querySelector('#inputs')
// // console.log(inputs)

// function checkNumber(e) {
  // var numberOne = Number(inputOne.value)
  // var numberTwo = Number(inputTwo.value)
  // // console.log(numberOne, numberTwo)

  // if (numberOne > numberTwo) {
  //   inputOne.style.backgroundColor = 'green'
  //   inputTwo.style.backgroundColor = 'white'
  // } else {
  //   inputOne.style.backgroundColor = 'white'
  //   inputTwo.style.backgroundColor = 'green'
  // }

//   let num = 0

//   var changedInput = e.target.value
//   if (changedInput > num) {
//     e.target.style.backgroundColor = 'green'
//     num = changedInput
//   }

// }

// inputs.addEventListener('input', checkNumber)
