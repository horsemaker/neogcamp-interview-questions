var btnGuess = document.querySelector('#btn-guess')
var txtInput = document.querySelector('#txt-input')
var outputDiv = document.querySelector('#age-output')

var serverURL = 'https://api.agify.io/'

function getTranslationURL(text) {
  console.log(text)
  console.log(serverURL + '?' + 'name=' + text)
  return serverURL + '?' + 'name=' + text
}

function errorHandler(error) {
  console.log('error occured', error)
  alert('something wrong with server! try again after some time')
}

function clickEventHandler() {
  console.log(btnGuess)
  console.log(txtInput)
  console.log(outputDiv)

  var inputText = txtInput.value
  console.log(inputText)

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var age = json.age
      outputDiv.innerText = age // output
    })
    .catch(errorHandler)
}

btnGuess.addEventListener('click', clickEventHandler)
