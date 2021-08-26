const input = document.querySelector("#input")
const h1Button = document.querySelector("#button-h1")
const h2Button = document.querySelector("#button-h2")
const h3Button = document.querySelector("#button-h3")
const output = document.querySelector("#output")
const showButton = document.querySelector("#button-show")

const H1SIZE = 32
const H2SIZE = 24
const H3SIZE = 18.72

function showOutput(){
    output.innerText = input.value
}

function h1Handler(){
    output.style.fontSize = `${H1SIZE}px`
    output.innerText = input.value
}

function h2Handler(){
    output.style.fontSize = `${H2SIZE}px`
    output.innerText = input.value
}

function h3Handler(){
    output.style.fontSize = `${H3SIZE}px`
    output.innerText = input.value
}

showButton.addEventListener('click', showOutput)

h1Button.addEventListener('click', h1Handler)
h2Button.addEventListener('click', h2Handler)
h3Button.addEventListener('click', h3Handler)

