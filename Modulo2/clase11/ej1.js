/*Ejercicio 1:
Crear una función que convierta pulgadas en centímetros. Recibe por
parámetro pulgadas y retorna su equivalente en centímetros.*/
// 1 pulg = 2.54 cm

const prompt = require("prompt-sync")({sigint: true});

let pulgadas = parseFloat(prompt("Ingrese las pulgadas: "));

function convertidor(pulgadas) {
    return pulgadas*2.54 ;
}
console.log(convertidor(pulgadas));

