const prompt = require("prompt-sync")({sigint: true});

let primerNumero=44;
let segundoNumero=12;

let resultadoSuma = primerNumero + segundoNumero;
let resultadoResta= primerNumero - segundoNumero;
let resultadoMultiplicacion= primerNumero * segundoNumero;
let resultadoDivision= primerNumero / segundoNumero;

console.log("Los resultados son los siguientes: ");
console.log("Suma : " + resultadoSuma );
console.log("Resta : " + resultadoResta );
console.log("Multiplicacion: " + resultadoMultiplicacion);
console.log("Division: " + resultadoDivision);
