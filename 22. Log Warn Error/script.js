// Take an input from the user in text format.
// Have 3 buttons with the names of "Log" ,"Warn" and "Error".
// If user clicks on "Log" button then the text entered by user will be shown in black color.
// Similarly if the user clicks on "Warn " and "Error " buttons then the text entered by user will be shown on the screen in the yellow and red colors respectively.

var textArea = document.querySelector('#text')
var btnLog = document.querySelector('#btn-log')
var btnWarn = document.querySelector('#btn-warn')
var btnError = document.querySelector('#btn-error')

function changeColor(e) {
  var btnName = e.target.innerText
  // console.log(btnName)

  if (btnName === 'Log') {
    textArea.style.color = 'black'
  } else if (btnName === 'Warn') {
    textArea.style.color = '#8B8000'
  } else if (btnName === 'Error') {
    textArea.style.color = 'red'
  }
}

btnLog.addEventListener('click', changeColor)
btnWarn.addEventListener('click', changeColor)
btnError.addEventListener('click', changeColor)
