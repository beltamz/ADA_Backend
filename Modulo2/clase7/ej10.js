const prompt = require("prompt-sync")({sigint: true});

let precioOriginal= parseFloat(prompt("Ingrese el precio original: "));
let porcentajeUsuario= parseFloat(prompt("Ingrese el % de descuento: "));
let porcentaje= porcentajeUsuario/100;
let precioFinal= precioOriginal - (precioOriginal*porcentaje);

console.log("Precio inicial:  "+ precioOriginal);
console.log("Precio final:  "+ precioFinal);
