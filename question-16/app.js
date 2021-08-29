/*
Create two objects with name, power, and yuga as Ram, 2500, Treta. Krishna, 2325, Dwapar. Write a function which takes two objects and return the person with more power.
*/

const ramObject = {
    name:'ram',
    power:2500,
    yuga:'Treta'
}

const krishnaObject ={
    name:'Krihna',
    power:232500,
    yuga:'Dwapara'
}

const powerValidaor = (object1, object2) => object1.power > object2.power ? object1 : object2

console.log(powerValidaor(ramObject,krishnaObject))