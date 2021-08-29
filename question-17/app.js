/*
Create two objects with name, power, and yuga as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points. Write a function which takes two objects and return the person with more power based on their name and power both.
*/

const ramObject = {
    name:'ram',
    power:2500,
    yuga:'Treta',
}

const krishnaObject ={
    name:'Krihnakrishna',
    power:2325,
    yuga:'Dwapara',
}

function namePower(object){
    return object.power = object.power + object.name.length *35 
}

const namePowerValidator =(object1, object2) => (namePower(ramObject) > namePower(krishnaObject) ? object1 : object2)

console.log(namePowerValidator(ramObject, krishnaObject))

