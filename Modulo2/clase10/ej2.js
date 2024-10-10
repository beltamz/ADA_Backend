/*Ejercicio 2: Switch
Usando la estructura switch, crea un programa en el que si un usuario
ingresa "casa", "perro", "pelota", "árbol" o "genio", nos devuelva la
misma palabra traducida al idioma inglés.
En caso de que la palabra sea distinta a la esperada, mostrarle un
mensaje que le informe que la palabra ingresada es incorrecta.*/

const prompt = require("prompt-sync")({sigint: true});

let palabra= prompt("Ingrese una palabra: ");

switch(palabra){
    case "casa":
        console.log("La palabra casa en ingles es house");
    break;
    case "perro":
        console.log("La palabra perro en ingles es dog");
    break;
    case "pelota":
        console.log("La palabra pelota en ingles es ball");
    break;
    case "arbol":
        console.log("La palabra arbol en ingles es tree");
    break;
    case "genio":
        console.log("La palabra genio en ingles es genius / genie");
    break;
    default:
        console.log("La palabra ingresada es incorrecta");
}