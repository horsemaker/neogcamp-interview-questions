var red = document.querySelector('#red')
var green = document.querySelector('#green')
var blue = document.querySelector('#blue')

function convertToRed() {
    var txt = document.querySelector('#txt-input')
    txt.style.color = 'red'
}

function convertToGreen() {
    var txt = document.querySelector('#txt-input')
    txt.style.color = 'green'
}

function convertToBlue() {
    var txt = document.querySelector('#txt-input')
    txt.style.color = 'blue'
}

red.addEventListener('click', convertToRed)
green.addEventListener('click', convertToGreen)
blue.addEventListener('click', convertToBlue)