const input = document.querySelector("#password")
const submitButton = document.querySelector("#submit")
const output = document.querySelector("#output")
let password =''

submitButton.disabled = true

// function setPassword(element){
//     // console.log(element)
//     checkPasswordLength(element)
// }

function checkPasswordLength(password){
    
    if(password.length < 10){
        output.innerText = 'password length should be greater than 10'
        input.style.backgroundColor = 'red'
    }else{
        output.innerText = 'success'
        submitButton.disabled = false
        input.style.backgroundColor = 'green'
    }
}

function submitHandler(){
    // console.log('clicked')
    if(!submitButton.disabled){
        // console.log('here')
        output.innerText = 'your password can be accepted'
    }
}

input.addEventListener('input', (e) => checkPasswordLength(e.target.value))
submitButton.addEventListener('click', submitHandler)