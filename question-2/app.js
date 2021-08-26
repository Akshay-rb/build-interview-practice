const input = document.querySelector("#input")
const plusButton = document.querySelector("#plus")
const showButton =  document.querySelector("#show")
const minusButton = document.querySelector("#minus")
const output = document.querySelector("#output")

let numberOfPixels = 32
function plusHandler(){
    numberOfPixels += 2
    output.style.fontSize = `${numberOfPixels}px`
}

function minusHandler(){
    numberOfPixels -= 2
    output.style.fontSize = `${numberOfPixels}px`
}

function showOutput(){
    output.style.fontSize = `${numberOfPixels}px`
    output.innerText = input.value    
}

showButton.addEventListener('click', showOutput)

plusButton.addEventListener('click', plusHandler)

minusButton.addEventListener('click', minusHandler)

