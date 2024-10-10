const prompt = require("prompt-sync")({sigint: true});

const PI=3.14159;
let radio= parseFloat(prompt("Ingrese el valor del radio: "));
let diametro= radio *2;
let area= PI * (radio*radio);
let perimetro=PI * diametro;

console.log(`El valor de su area es de ${area}.`)
console.log(`El valor de su perimetro es de ${perimetro}.`)