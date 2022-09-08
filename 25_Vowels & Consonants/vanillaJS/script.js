// Create a web app to take text input from the user and show the number of vowels and consonants. (spaces should not be counted)

var textField = document.querySelector('#text')
var vowels = document.querySelector('#vowels')
var consonants = document.querySelector('#consonants')

var v = 0
var c = 0

function countVowels(txt) {
  let text = textField.value
  if (text !== "") {
    for (var i = 0; i < text.length; i++) {
      if (
        text[i] === "a" ||
        text[i] === "e" ||
        text[i] === "i" ||
        text[i] === "o" ||
        text[i] === "u"
      ) {
        v++;
      } else {
        c++;
      }
    }
  }
  vowels.textContent = 'Vowels: ' + v
  consonants.textContent = 'Consonants: ' + c
  v=0;
  c=0;
}

textField.addEventListener('input', countVowels)
