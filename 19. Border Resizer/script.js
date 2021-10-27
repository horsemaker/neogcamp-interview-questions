// Create a web app and render your name using any heading or paragraph tag.
// It should have a border of 1px around it. Create 2 buttons, '5px' and '10px' below your name. The width of border should change to 5px and 10px by clicking respective buttons.

var fivePX = document.querySelector('#five-px')
var tenPX = document.querySelector('#ten-px')
var resetBtn = document.querySelector('#reset')

function addFivePX() {
  // console.log('add five pixels.')
  var name = document.querySelector('#name')
  name.style.border = '5px solid black'
}

function addTenPX() {
  // console.log('add ten pixels.')
  var name = document.querySelector('#name')
  name.style.border = '10px solid black'
}

function resetBorder() {
  var name = document.querySelector('#name')
  name.style.border = '1px solid black'
}

fivePX.addEventListener('click', addFivePX)
tenPX.addEventListener('click', addTenPX)
resetBtn.addEventListener('click', resetBorder)
