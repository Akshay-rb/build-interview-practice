/*
Create two objects with name, age, and yuga as Ram, 25, Treta. Krishna, 31, Dwapar. Write a function which takes two objects and return the person with more age.
*/

let ramaObject ={
    name : 'Ram',
    age : '25',
    yuga : 'Treta'
}

let krishnaObject ={
    name : 'Krishna',
    age : '31',
    yuga : 'Dwapar'
}

const ageValidator =(object1, object2) =>{
    return (object1.age > object2.age ? object1.name : object2.name )
}

console.log(ageValidator(ramaObject, krishnaObject))