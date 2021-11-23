// 1. Create a password checker web app. If password is lesser than 10 characters then show an error to user otherwise show success.
// 2. Make the submit button disabled.
// 3. Make the input field green or red depending on input.
// BONUS: Transfer text in password field to password protected text.

var inputOneField = document.querySelector('#inputOne')
var btnOne = document.querySelector('#btnOne')
var outputOne = document.querySelector('#outputOne')
var inputTwoField = document.querySelector('#inputTwo')
var btnTwo = document.querySelector('#btnTwo')
var inputThreeField = document.querySelector('#inputThree')
var btnThree = document.querySelector('#btnThree')
var inputBonusField = document.querySelector('#inputBonus')
var btnBonus = document.querySelector('#btnBonus')

function checkPasswordOne() {
  let inputOne = inputOneField.value
  if (inputOne.length !== 0) {
    if (inputOne.length < 10) {
      outputOne.textContent = 'Error: Minimum Password length should be 10!'
      outputOne.style.color = 'red'
    } else {
      outputOne.textContent = 'Success!'
      outputOne.style.color = 'green'
    }
  } else {
    outputOne.textContent = 'Please enter the password!'
    outputOne.style.color = 'red'
  }
}

function checkPasswordTwo() {
  let inputTwo = inputTwoField.value
  if (inputTwo.length >= 10) {
    btnTwo.disabled = false
  } else {
    btnTwo.disabled = true
  }
}

function checkPasswordThree() {
  let inputThree = inputThreeField.value
  if (inputThree.length !== 0) {
    if (inputThree.length < 10) {
      inputThreeField.style.backgroundColor = 'red'
      btnThree.disabled = true
    } else {
      inputThreeField.style.backgroundColor = 'green'
      btnThree.disabled = false
    }
  } else {
    inputThreeField.style.backgroundColor = 'transparent'
  }
}

function checkPasswordBonus() {
  let inputBonus = inputBonusField.value
  if (inputBonus.length >= 10) {
    btnBonus.disabled = false
  } else {
    btnBonus.disabled = true
  }
}

btnOne.addEventListener('click', checkPasswordOne)
inputTwoField.addEventListener('input', checkPasswordTwo)
inputThreeField.addEventListener('input', checkPasswordThree)
inputBonusField.addEventListener('input', checkPasswordBonus)
