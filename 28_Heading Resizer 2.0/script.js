// Create a web app where I can input a text. Now, create three buttons h1, h2, h3. When I click on any of the button, the text should become h1, h2, or h3.

var textField = document.querySelector('#text')
var buttonsDiv = document.querySelector('#buttons')
var outputDiv = document.querySelector('#output')

buttonsDiv.addEventListener('click', (e) => {
  var btnName = e.target.innerText

  if (btnName === 'h1') {
    outputDiv.innerHTML = `<h1>${textField.value}</h1>`
  } else if (btnName === 'h2') {
    outputDiv.innerHTML = `<h2>${textField.value}</h2>`
  } else if (btnName === 'h3') {
    outputDiv.innerHTML = `<h3>${textField.value}</h3>`
  } else {
    outputDiv.innerHTML = ''
  }
})
