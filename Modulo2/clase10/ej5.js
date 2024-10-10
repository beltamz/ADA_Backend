/*Ejercicio 5: If Ternario
Escribe un programa que lea una nota (entero entre 0 y 100) e imprima
el equivalente en letras siguiendo esta escala:
✓ A si la nota está entre 90 y 100
✓ B si la nota está entre 80 y 89
✓ C si la nota está entre 70 y 79
✓ D si la nota está entre 60 y 69
✓ F si la nota está entre 0 y 59
Utiliza operadores ternarios para determinar la calificación en letras.*/

const prompt = require("prompt-sync")({sigint: true});

let nota=parseFloat(prompt("Ingrese una nota:"));

console.log( nota>=90 && nota<=100 ? "Su nota equivale a una A": nota>=80 && nota<90 ? "Su nota equivale a una B": nota>=70 && nota<80 ? "Su nota equivale a una C" : nota>=60 && nota<=69 ? "Su nota equivale a una D" : nota>=0 && nota<=59 ? "Su nota equivale a una F": "Nota no valida" );
