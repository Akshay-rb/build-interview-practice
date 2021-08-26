const inputOne = document.querySelector("#input-1")
const inputTwo = document.querySelector("#input-2")
const plusButton = document.querySelector("#plus")
const minusButton = document.querySelector("#minus")
const multiplyButton = document.querySelector("#multiply")
const divideButton = document.querySelector("#divide")
const output =document.querySelector("#output")


function plusHandler(){ 
    output.innerText = Number(inputOne.value) + Number(inputTwo.value)
}

function minusHandler(){
    output.innerText = Number(inputOne.value) - Number(inputTwo.value)
}

function multiplyHandler(){
    output.innerText = Number(inputOne.value) * Number(inputTwo.value)
}

function divideHandler(){
    output.innerText = Number(inputOne.value) / Number(inputTwo.value)
}

plusButton.addEventListener('click', plusHandler)

minusButton.addEventListener('click', minusHandler)

multiplyButton.addEventListener('click', multiplyHandler)

divideButton.addEventListener('click', divideHandler)