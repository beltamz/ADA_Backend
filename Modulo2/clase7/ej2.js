const prompt = require("prompt-sync")({sigint: true});
let nombre;
let edad;
let peso;

nombre= prompt("Ingrese su nombre: ");
edad= parseFloat(prompt("Ingrese su edad: "));
peso= parseFloat(prompt("Ingrese su peso: "));

console.log("Bienvenido " + nombre + ", usted tiene " + edad + " años. Su peso es de " + peso + " kg.");