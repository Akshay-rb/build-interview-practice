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
    console.log('here')
    if(response.status === 404){
        console.log('status here')
    }
    // console.log(response.status )
    // console.log('an error occured ', error)

}

const showHandler = () =>{
    fetch(url)
    .then(response => response.json())
    .then(json => listTitle(json))
    .catch(errorHandler)
}


showButton.addEventListener('click', showHandler)


// const showHandler = () =>{
//     fetch(url)
//     .then( response =>{
//         if(response.ok){
//             console.log('success')
//             return response.json()
//         }else{
//             if(response.status === 404){
//                 console.log('not found the request')
//                 output.innerText = 'not found the resource you are looking for'
//             }
//         }
//     })
//     .then(json => console.log(json))
//     .catch(error => output.innerText = error)
    
// }