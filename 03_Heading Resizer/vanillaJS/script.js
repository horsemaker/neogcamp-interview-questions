// Create a web app where I can input a text. Now, create three buttons h1, h2, h3. When I click on any of the button, the text should become h1, h2, or h3.

var h1 = document.querySelector('#h1')
var h2 = document.querySelector('#h2')
var h3 = document.querySelector('#h3')

function convertToH1() {
    var txt = document.querySelector('#txt-input')
    // txt.style.fontSize = '32px'
    txt.style.display = 'block'
    txt.style.fontSize = '2em'
    txt.style.marginTop = '0.67em'
    txt.style.marginBottom = '0.67em'
    txt.style.fontWeight = 'bold'
    txt.style.fon
}

function convertToH2() {
    var txt = document.querySelector('#txt-input')
    txt.style.fontSize = '24px'
}

function convertToH3() {
    var txt = document.querySelector('#txt-input')
    txt.style.fontSize = '18.72px'
}

h1.addEventListener('click', convertToH1)
h2.addEventListener('click', convertToH2)
h3.addEventListener('click', convertToH3)