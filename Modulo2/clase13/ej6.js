/*• Ejercicio 6: Numero N
Hacer un programa que calcule la suma de los N primeros números
naturales, dónde N es el número límite ingresado por teclado. */

const prompt = require("prompt-sync")({sigint: true});

function sumar(limite){
    let suma=0;
    
    for (let i = 0; i <= limite; i++) {
        suma= suma + i;
    }
    return suma;
}

let limite= parseInt(prompt("Ingrese un numero: "));
let resultado= sumar(limite);
console.log("La suma de todos los numeros hasta el valor " + limite + " (incluido) es: " + resultado );