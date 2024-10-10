/*Ejercicio 10: While y Do While
Implementa un programa que permita al usuario registrar la edad de
mascotas en una veterinaria hasta que decida dejar de agregar.
Cuando el usuario no agregue mas edades, imprimir en consola las
mascotas agregadas anteriormente y sus respectivas edades. */

const prompt = require("prompt-sync")({sigint: true});

let mascotas= [];
let edades=[];
let aux;
let i=0;

do {
    mascotas[i]=prompt("Ingrese la mascota: ");
    edades[i]= prompt("Ingrese la edad: ")
    aux=prompt("Desea agregar una nueva mascota? si / no");
    i++;
} while (aux=="si");

for(i=0; i<mascotas.length; i++){
    console.log("~ Mascota " + (i+1) + " : " + mascotas[i] + " . Edad: " + edades[i] + " año/s.");
}
