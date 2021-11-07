// Create a game (Guess The Number) where user has to guess the random number range from 1 to 10. User will input a number between 1 to 10 . On clicking the button, show the user whether he/she has guess the number or not.

var numberField = document.querySelector('#number')
var checkBtn = document.querySelector('#check')
var outputDiv = document.querySelector('#output')

function check() {
  var randomNum = Math.floor((Math.random() * 10) + 1)
  console.log(randomNum)
  if(numberField.value == randomNum) {
    outputDiv.innerText = "Right Guess!"
  } else {
    outputDiv.innerText = "Wrong Guess!"
  }
}

checkBtn.addEventListener('click', check)
