var numberOne = document.querySelector('#number-one')
var numberTwo = document.querySelector('#number-two')

var addition = document.querySelector('#addition')
var subtraction = document.querySelector('#subtraction')
var multiplication = document.querySelector('#multiplication')
var division = document.querySelector('#division')

var result = document.querySelector('#result')

function add() {
  var output = parseInt(numberOne.value) + parseInt(numberTwo.value)
  result.innerText = output
}

function subtract() {
  var output = parseInt(numberOne.value) - parseInt(numberTwo.value)
  result.innerText = output
}

function multiply() {
  var output = parseInt(numberOne.value) * parseInt(numberTwo.value)
  result.innerText = output
}

function divide() {
  var output = parseInt(numberOne.value) / parseInt(numberTwo.value)
  result.innerText = output
}

addition.addEventListener('click', add)
subtraction.addEventListener('click', subtract)
multiplication.addEventListener('click', multiply)
division.addEventListener('click', divide)
