// Create a web app to simulate the character counter functionality of Twitter. When user starts to type something, counter should starts to decrease from 30. When counter reaches to 15, show it in yellow till 0. When counter reaches to 0, show it in red till infinite -ve number ( no min limit ). Now create a button. On clicking the button, show the input text on web page. Also, when counter is less than 0, disable the button.

var tweetField = document.querySelector('#tweet')
var btn = document.querySelector('#button')
var charCount = document.querySelector('#char-count')
var outputDiv = document.querySelector('#output')

function counter() {
  // console.log('hey')
  var tweet = tweetField.value
  // console.log(tweet)
  // console.log(tweet.length)
  var count = 30 - tweet.length
  charCount.textContent = 'Characters: ' + count
  if (count <= 0) {
    charCount.style.color = 'red'
    btn.disabled = true
    return
  }
  else if (count > 0 && count <= 15) {
    charCount.style.color = 'yellow'
  }
  btn.disabled = false
}

function tweetIt() {
  // console.log('hey')
  var htmlString  = `<div>${tweetField.value}</div>`
  outputDiv.innerHTML += htmlString
}

tweetField.addEventListener('input', counter)
btn.addEventListener('click', tweetIt)
