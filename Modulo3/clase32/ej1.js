const readLineSync= require('readline-sync');

console.log("Tienda Online Farmacity");

let nombre=readLineSync.question("Ingrese su nombre:");
let edad=readLineSync.questionInt("Ingrese su edad:");

console.log(`Bienvenid@ ${nombre}, segun su edad(${edad}), le recomendamos los siguientes productos de skincare:`);
