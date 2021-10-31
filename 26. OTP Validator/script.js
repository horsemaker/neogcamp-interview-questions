// Here is an API: https://otpgenerator.ishanjirety.repl.co/get-otp?name= . You will enter a name as input from your app and send this API a request with the name along with it (this will be the final URL : https://otpgenerator.ishanjirety.repl.co/get-otp?name=Nameentered) on button click . In the response you will get an OTP which should be shown on the screen.

// Followup1: Make another input section that asks the user to guess the OTP and for checking whether the guess is equal to the actual one or not add a button "Validate" which on clicking shows the message "Success " or "Failure" depending .  Response is coming in the form of Name-OTP format so something like Pratyush-570928.So compare the OTP value from the response as well as the input which is being entered

// Followup2: Change the color of validate message to GREEN when success comes up and change it to RED if failure comes up on click of Validate Button.

var nameField = document.querySelector('#name')
var fetchOTP = document.querySelector('#fetch-otp')
var otpDiv = document.querySelector('#otp')
var userOtpField = document.querySelector('#user-otp')
var checkOTP = document.querySelector('#check-otp')
var validationDiv = document.querySelector('#validation')

var url = 'https://otpgenerator.ishanjirety.repl.co/get-otp?name='
var otp = ''

function fetchAPI() {
  fetch(url + nameField.value)
    .then((res) => res.json())
    .then((json) => {
      // console.log(json)
      otp = json.otp
      otpDiv.textContent = 'OTP: ' + json.otp
    })
}

function validate() {
  if (userOtpField.value == otp) {
    validationDiv.textContent = 'Success'
    validationDiv.style.color = 'green'
  } else {
    validationDiv.textContent = 'Error'
    validationDiv.style.color = 'red'
  }
}

fetchOTP.addEventListener('click', fetchAPI)
checkOTP.addEventListener('click', validate)
