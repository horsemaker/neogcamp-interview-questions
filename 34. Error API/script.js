// 1. Here' an API. It will give an error. Write a web app, call this API and read the error message. Show the name of the error (not whole error). API - [https://randomsuser.me/api/](https://randomsuser.me/api/)

var btnFetch = document.querySelector('#btn-fetch')
var outputDiv = document.querySelector('#output')

function fetchAPI() {
  console.log("called")
  fetch('https://randomsuser.me/api')
    .then((res) => res.json())
    .then((json) => {
      var error = json.error
      outputDiv.textContent = error
    })
    .catch((err) => {
      // console.log(err)
      outputDiv.innerText = err
    })
}

btnFetch.addEventListener('click', fetchAPI)
