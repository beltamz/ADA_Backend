/*Ejercicio 4:
Crear una función que calcule la edad de los perros, considerando que 1 año
para nosotros son 7 de ellos.*/
const prompt = require("prompt-sync")({sigint: true});

let edad= parseInt(prompt("Ingrese la edad de su perro: "));

function anioPerruno(edad) {
    return edad*7;
}

console.log(anioPerruno(edad));
