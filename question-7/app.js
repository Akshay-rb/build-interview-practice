/*      Question 7

      Here's an API. Create a web app to call this API with your full name and
      print the response. This could be extended where we ask you to do
      something with the response. Like add a text, or capitalise etc.
*/
const showButton = document.querySelector("#show")
const output = document.querySelector("#output")
let url = 'https://jsonplaceholder.typicode.com/todos'

function listTitle(json){
    for(const value of Object.values(json)){
        console.log(value.title)
        output.innerText = value.title
    }
}

function errorHandler(error){
    console.log('an error occured ', error)

}

const showHandler = () =>{
    fetch(url)
    // .then(response => console.log(response.status ))
    .then(response => response.json())
    .then(json => listTitle(json))
    // .catch((error) => {console.log('an error occured'+ error)})
    .catch((error) => {
        console.error('error occured',error);
      })
}

showButton.addEventListener('click', showHandler)