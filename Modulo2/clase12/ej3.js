/*Ejercicio 3: Clasificación de edades
Solicita al usuario una edad y usa una función flecha para clasificarla en niño,
adolescente, adulto o adulto mayor */

const prompt = require("prompt-sync")({sigint: true});

let edad= parseInt(prompt("Ingrese una edad: "));

let clasificacion= edad => (edad>60 ? console.log("Es adulto mayor") : edad>=18 && edad<60 ? console.log("Es adulto") :  edad>= 11 && edad<18 ? console.log("Es adolescente"): edad<11 ? console.log("Es niño/a"): "" );

clasificacion(edad);