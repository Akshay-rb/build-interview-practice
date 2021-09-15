const inputText = document.querySelector("#input-password")
const checkbox = document.querySelector("#checkbox")

showPassword =()=>{
    console.log('clicked')
    if(checkbox.checked){
        inputText.type='text'
    } else{
        inputText.type='password'
    }
}

checkbox.addEventListener('change',showPassword)