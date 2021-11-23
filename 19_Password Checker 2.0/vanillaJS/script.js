// Create a web app, where I input my name, and then I input a password.
// If the password contains the input name in it, show an error message "Password can't have name"

// **Hint provided:** use .includes function

var nameOneField = document.querySelector('#name-one')
var passwordOneField = document.querySelector('#password-one')
// console.log(passwordOneField)
var btnCheckPassword = document.querySelector('#btn-password')
var outputOne = document.querySelector('#output-one')

var nameTwoField = document.querySelector('#name-two')
var passwordTwoField = document.querySelector('#password-two')
var outputTwo = document.querySelector('#output-two')

function checkPassword() {
  var nameOne = nameOneField.value.toLowerCase()
  var passwordOne = passwordOneField.value

  if (nameOne && passwordOne) {
    if (passwordOne.includes(nameOne)) {
      outputOne.textContent = "Password can't have name"
    } else {
      outputOne.textContent = 'OKAY to go!'
    }
  } else {
    alert('Enter values first!')
  }
}

function inputPassword() {
  var nameTwo = nameTwoField.value.toLowerCase()
  var passwordTwo = passwordTwoField.value

  if (nameTwo) {
    if (passwordTwo.includes(nameTwo)) {
      outputTwo.textContent = "Password can't have name"
    } else {
      outputTwo.textContent = 'OKAY to go!'
    }
  }
}

btnCheckPassword.addEventListener('click', checkPassword)
passwordTwoField.addEventListener('input', inputPassword)
