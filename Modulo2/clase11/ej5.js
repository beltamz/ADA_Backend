/*Ejercicio 5:
Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
sueldo mensual como parámetro.
PD: considerá que tu mes de trabajo tiene 40 horas.*/
const prompt = require("prompt-sync")({sigint: true});

let sueldo= parseFloat(prompt("Ingrese su sueldo: "));

function valorHora(sueldo) {
    return sueldo/40;
}

console.log("El valor de su hora es: " + valorHora(sueldo));