// Create 2 buttons with text YJHD and ZNMD. At the click of a button, call the given API with the query as same as the button text, and display the message you get on the screen.
// Follow Up: Instead of using calling the fetch function twice in both events(clicking of buttons), enclose it in a different function so that it can be used accordingly in both areas.

// API -
// https://mock-practice.prakhar10v.repl.co/bollywood?name=
// Eg - Clicking on the button YJHD will make a call to
// https://mock-practice.prakhar10v.repl.co/bollywood?name=YJHD

// var btnYJHD = document.querySelector('#btn-yjhd')
// var btnZNMD = document.querySelector('#btn-znmd')
var buttonsDiv = document.querySelector('#buttons')
var outputDiv = document.querySelector('#div-output')

function callAPI(e) {
  var movieName = e.target.innerText

  var url = 'https://mock-practice.prakhar10v.repl.co/bollywood'
  var apiURL = url + '?' + 'name' + '=' + movieName

  fetch(apiURL)
    .then((res) => res.json())
    .then((json) => {
      outputDiv.textContent = json.message
    })
}

// btnYJHD.addEventListener('click', callAPI)
// btnZNMD.addEventListener('click', callAPI)
buttonsDiv.addEventListener('click', callAPI)
