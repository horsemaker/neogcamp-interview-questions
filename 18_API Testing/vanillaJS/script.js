// Here's an API Link: https://mystery-api.kushanksriraj.repl.co/get

// This API link can give two errors, either 404, or 401.
// If the error is 404, show the user 'page not found' and if the error is 401, show the user 'you are not logged in'.

// Follow Up question: If the status is 200 then show the message "API is working"

var btnFetchAPI = document.querySelector('#btn-fetch')
var outputDiv = document.querySelector('#output')

function fetchAPI() {
  fetch('https://mystery-api.kushanksriraj.repl.co/get')
    .then((res) => {
      if (res.status === 404) {
        outputDiv.textContent = 'Page not found'
      } else if (res.status === 401) {
        outputDiv.textContent = 'You are not logged in'
      } else if (res.status === 200) {
        outputDiv.textContent = 'API is working'
      }
    }).catch((err) => console.log(err))
}

btnFetchAPI.addEventListener('click', fetchAPI)
