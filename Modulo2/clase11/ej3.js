/*Ejercicio 3:
Crear una función que recibe un string y devuelve la misma frase pero con
admiración.*/

const prompt = require("prompt-sync")({sigint: true});

let palabra= prompt("Ingrese una palabra: ");

function admiración(palabra) {
    return "¡" + palabra + "!";
}

console.log(admiración(palabra));