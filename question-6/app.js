const loadedButton = document.querySelector("#loaded")
const loadingText = document.querySelector("#loading")

function loadedHandler(){
    loadingText.innerText = ''
}

loadedButton.addEventListener('click', loadedHandler)