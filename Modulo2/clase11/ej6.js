/*Ejercicio 6:
Crear la función calculadorIMC() que reciba la altura en metros y el peso en
kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
probando diferentes valores */
//imc = peso/ (altura* altura);
const prompt = require("prompt-sync")({sigint: true});

let altura = parseFloat(prompt("Ingrese su altura: "));
let peso= parseFloat( prompt("Ingrese su peso: "));

function IMC(altura, peso) {
    return peso/(altura*altura);
}

console.log("Su IMC es de : " + IMC(altura, peso));
