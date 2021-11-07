// Create a web app with a button loaded. Show a text loading... on a web app. However, hide it if I click on the button loaded.

var button = document.querySelector('#button')

function disappearLoading() {
    var txt = document.querySelector("#loading-div")
    txt.style.display = 'none'
    // txt.innerText = ''
    button.style.marginTop = '1.15rem'
}

button.addEventListener('click', disappearLoading)