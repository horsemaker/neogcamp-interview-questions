var outputDivOne = document.querySelector('#outputDivOne')
var outputDivTwo = document.querySelector('#outputDivTwo')
var btnAPI = document.querySelector('#btnAPI')

var serverURL = 'https://datausa.io/api/data'

function callAPI() {
  fetch(serverURL)
    .then((response) => response.json())
    .then((json) => {
      var data = json.error
      outputDivOne.textContent = data
      outputDivOne.style.color = 'red'
    })
    .catch((error) => (outputDivTwo.textContent = error))
}

btnAPI.addEventListener('click', callAPI)

// https://datausa.io/api/data?drilldowns=Nation&measures=Population
