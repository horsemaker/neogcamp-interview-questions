var h1 = document.querySelector('#h1')
var h2 = document.querySelector('#h2')
var h3 = document.querySelector('#h3')

function convertToH1() {
    var txt = document.querySelector('#txt-input')
    txt.style.fontSize = '32px'
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