/*Ejercicio 2:
Crear una función que recibe un string y lo convierte en una URL. Ej: “pepito”
es devuelto como “http://www.pepito.com”*/

const prompt = require("prompt-sync")({sigint: true});

let palabra=prompt("Ingrese una palabra: ");

function tuPaginaWeb(palabra) {
    return "http://www." + palabra + ".com";
}

console.log(tuPaginaWeb(palabra));