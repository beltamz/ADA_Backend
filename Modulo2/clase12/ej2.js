/*Ejercicio 2: Calcular promedio de calificaciones
Solicita al usuario cinco calificaciones y usa una función flecha para calcular
el promedio. */

const prompt = require("prompt-sync")({sigint: true});

let calificaciones= [];
let suma=0;

for (let i = 0; i < 5; i++) {
    calificaciones[i]= parseFloat(prompt("Ingrese una calificación: "));
    suma = suma + calificaciones[i];
}

let promedio= suma => suma/5 ;

console.log( "El promedio de las 5 notas es de: " + promedio(suma));