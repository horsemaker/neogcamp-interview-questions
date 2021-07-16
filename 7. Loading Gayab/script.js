var button = document.querySelector('#button')

function disappearLoading() {
    var txt = document.querySelector("#loading-div")
    txt.style.display = 'none'
    // txt.innerText = ''
    button.style.marginTop = '1.15rem'
}

button.addEventListener('click', disappearLoading)