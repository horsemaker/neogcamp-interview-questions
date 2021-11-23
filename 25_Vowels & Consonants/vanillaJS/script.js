// Create a web app to take text input from the user and show the number of vowels and consonants. (spaces should not be counted)

var textField = document.querySelector('#text')
var vowels = document.querySelector('#vowels')
var consonants = document.querySelector('#consonants')

var noVowels = 0
var noConsonants = 0

function countVowels() {
  let inputText = textField.value

  inputText.split('').forEach((letter) => {
    console.log(letter)
  })
  // if (isNaN(textField.value)) {
  //   var letter = textField.value.slice(-1).toLowerCase()
  //   if (
  //     letter === 'a' ||
  //     letter === 'e' ||
  //     letter === 'i' ||
  //     letter === 'o' ||
  //     letter === 'u'
  //   ) {
  //     noVowels++
  //   } else {
  //     noConsonants++
  //   }
  // }

  // vowels.textContent = 'Vowels: ' + noVowels
  // consonants.textContent = 'Consonants: ' + noConsonants
}

textField.addEventListener('input', countVowels)
