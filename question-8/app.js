const showButton = document.querySelector("#show")
const output = document.querySelector("#output")

let url = 'https://jsonplaceholder.typicode.com/todos/100'

const showHandler = () =>{
    console.log('clicked')
    fetch(url)
    .then(response =>{
        if(response.ok){
           if(response.status === 200){
               return response.json()
           } 
        }else{
            console.log("error", response)
            output.innerText = 'an error occured '+ response.json().title
        }
    })
    .then(json => output.innerText = json.title)
    .catch(error => console.log(error))
    // .then(response => response.json())
    // .then(json => console.log(json))
}

showButton.addEventListener('click', showHandler)