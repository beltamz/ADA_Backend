const prompt = require("prompt-sync")({sigint: true});

let peso= parseFloat(prompt("Ingrese su peso: "));
let altura= parseFloat(prompt("Ingrese su altura: "));

let imc= peso/ (altura*altura);

console.log("Su peso de " + peso + " y su altura de " + altura + ", equivalen a un IMC de: " + imc + " .");