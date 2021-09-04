const plusButoon = document.querySelector('#button-plus')
const minusButton = document.querySelector("#button-minus")
const value = document.querySelector("#value")

let count = 0

function plusHandler(){
    console.log(typeof Number(value))
     count += 1
    console.log('clicked plus ', count)
    value.innerText = count
}

function minusHanler(){
    count -= 1
    value.innerText = count
}

minusButton.addEventListener('click', minusHanler)
plusButoon.addEventListener('click', plusHandler)