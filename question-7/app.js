/*      Question 7

      Here's an API. Create a web app to call this API with your full name and
      print the response. This could be extended where we ask you to do
      something with the response. Like add a text, or capitalise etc.
*/
const showButton = document.querySelector("#show")
const output = document.querySelector("#output")
let url = 'https://jsonplaceholder.typicode.com/todos'

fetch(url)
.then(response => console.log(response))

function listTitle(json){
    for(const value of Object.values(json)){
        console.log(value.title)
        output.innerText = value.title
    }
}

const showHandler = () =>{
    fetch(url)
    .then(response => response.json())
    .then(json => listTitle(json))
}

showButton.addEventListener('click', showHandler)