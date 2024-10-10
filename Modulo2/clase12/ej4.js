/*Ejercicio 4: Calcular descuento por cantidad
Solicita al usuario la cantidad de productos comprados y el precio unitario.
Usa una función flecha para calcular el total con descuento según la cantidad. */

const prompt = require("prompt-sync")({sigint: true});

let cantComprada= parseInt(prompt("Ingrese la cantidad comprada: "));
let precioUnit= parseFloat( prompt("Ingrese su valor: "));
let dto250= precioUnit*0.10;
let dto500= precioUnit*0.15;
let dto750= precioUnit*0.20;

let total= (cantComprada, precioUnit)=> (cantComprada>=250 && cantComprada<500 ? cantComprada* (precioUnit-dto250): cantComprada>=500 && cantComprada<750 ? cantComprada*(precioUnit-dto500): cantComprada>750 ? cantComprada*(precioUnit-dto750):  cantComprada*precioUnit ) ;

console.log("Su precio final es de: " + total(cantComprada,precioUnit));
