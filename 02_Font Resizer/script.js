// Create a web app where I can input a text. Now create two buttons + and -. On clicking + increase the fontSize by 2px and vice versa.

var increaseFontSize = document.querySelector('#increaseFontSize')
var decreaseFontSize = document.querySelector('#decreaseFontSize')

function increaseFontSizeBy2px() {
  var txt = document.querySelector('#txt-input')
  var style = window.getComputedStyle(txt, null).getPropertyValue('font-size')
  currentSize = parseFloat(style)
  txt.style.fontSize = (currentSize + 2) + 'px'
}

function decreaseFontSizeBy2px() {
    var txt = document.querySelector('#txt-input')
    var style = window.getComputedStyle(txt).getPropertyValue('font-size')
    currentSize = parseFloat(style)
    txt.style.fontSize = (currentSize - 2) + 'px'
  }

increaseFontSize.addEventListener('click', increaseFontSizeBy2px)
decreaseFontSize.addEventListener('click', decreaseFontSizeBy2px)
