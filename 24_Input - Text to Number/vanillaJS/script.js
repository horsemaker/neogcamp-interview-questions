// Take some input from the user. the input HTML element must be of type text attribute. Make the input type number, without using the type number attribute or any attribute related function.

var inputEl = document.querySelector('#input-el')
var preNum = ''

function checkInput() {
  // console.log(typeof(inputEl.value))
  // console.log(isNaN("123456abcde"))
  // console.log(isNaN("123456"))
  // Number("123456") => Number => false
  // Number("123456abcde") => NaN => true

  // breakable code
  // if (isNaN(inputEl.value)) {
  //   inputEl.value = inputEl.value.slice(0, -1)
  // }

  // correct code
  if (isNaN(inputEl.value)) {
    inputEl.value = preNum
  } else {
    preNum = inputEl.value
  }
}

inputEl.addEventListener('input', checkInput)
