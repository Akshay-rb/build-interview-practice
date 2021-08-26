const input = document.querySelector("#input-text")
const output = document.querySelector("#output-text")
const redButton = document.querySelector("#red")
const greenButton = document.querySelector("#green")
const blueButton = document.querySelector("#blue")
const showButton = document.querySelector("#button-show")

color ={
    red : 'red',
    green: 'green',
    blue:'blue'
}

function showOutput(){
    console.log('clicked')
    output.innerText = input.value
}

function redHandler(){
    redButton.style.backgroundColor = `${color.red}`
    output.style.color = `${color.red} `
}

function greenHandler(){
    greenButton.style.backgroundColor = `${color.green}`
    output.style.color = `${color.green}`
}

function blueHandler(){
    blueButton.style.backgroundColor = `${color.blue}`
    output.style.color = `${color.blue}`
}

showButton.addEventListener('click', showOutput)
redButton.addEventListener('click', redHandler)
greenButton.addEventListener('click', greenHandler)
blueButton.addEventListener('click', blueHandler)
