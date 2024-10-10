/*Ejercicio 4: Do While
Escribe un programa que solicite al usuario ingresar una contraseña. Si
la contraseña es incorrecta, debe volver a pedirla hasta que el usuario
ingrese la correcta. La contraseña correcta es "1234".*/

const prompt = require("prompt-sync")({sigint: true});

let contrasena;

do {
    contrasena= parseInt(prompt("Ingrese la contraseña: "));
} while (contrasena!=1234);

console.log("Usted ingresó la contraseña correctamente.");