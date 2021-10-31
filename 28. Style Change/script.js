// Question - Create an Input Element, display the text entered in it, in an outside div. Now Create three buttons, with the names `Bold`, `Italics` and `Underline`. And clicking on the button will apply the respective style to the text present in output div.

var textField = document.querySelector('#input')
var boldBtn = document.querySelector('#bold')
var italicsBtn = document.querySelector('#italics')
var underlineBtn = document.querySelector('#underline')
var outputDiv = document.querySelector('#output')
// console.log(outputDiv)
var stylesDiv = document.querySelector('#styles')

function displayText() {
  outputDiv.textContent = textField.value
}

// function doBold() {
//   outputDiv.style.fontWeight = 'bold'
// }

// function doItalics() {
//   outputDiv.style.fontStyle = 'italic'
// }

// function doUnderline() {
//   outputDiv.style.textDecoration = 'underline'
// }

function doStyle(e) {
  var clickedBtn = e.target.innerText

  if (clickedBtn === 'Bold') {
    outputDiv.style.fontWeight = 'bold'
  } else if (clickedBtn === 'Italics') {
    outputDiv.style.fontStyle = 'italic'
  } else if (clickedBtn === 'Underline') {
    outputDiv.style.textDecoration = 'underline'
  }
}

textField.addEventListener('input', displayText)
stylesDiv.addEventListener('click', doStyle)
// boldBtn.addEventListener('click', doBold)
// italicsBtn.addEventListener('click', doItalics)
// underlineBtn.addEventListener('click', doUnderline)
