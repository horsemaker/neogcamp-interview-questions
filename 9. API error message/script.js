var outputDivOne = document.querySelector('#outputDivOne')
var outputDivTwo = document.querySelector('#outputDivTwo')
var btnAPI = document.querySelector('#btnAPI')

var serverURL = 'https://datausa.io/api/data'

function callAPI() {
  try {
    fetch(serverURL)
      .then((response) => {
        // console.log(response)
        response.json()
      })
      .then((json) => {
        // console.log(json)
        var data = json.error
        outputDivOne.textContent = data
        outputDivOne.style.color = 'red'
      })
  } catch (error) {
    console.log("there's an error")
    // console.log(error)
    outputDivTwo.textContent = error
  }
}

btnAPI.addEventListener('click', callAPI)

// https://datausa.io/api/data?drilldowns=Nation&measures=Population
