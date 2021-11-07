// Create a web app where I can input a text. Now reverse the text and on clicking the button, show the output.

var textFeild = document.querySelector('#text')
var btnReverse = document.querySelector('#btn-reverse')
var outputDiv = document.querySelector('#output')

function reverseDisplay() {
  var reversedString = textFeild.value.split('').reverse().join('')
  outputDiv.innerText = reversedString
  // textFeild.value = reversedString
}

btnReverse.addEventListener('click', reverseDisplay)
