/*Ejercicio 2: Matriz 5x5
Declara una variable que contenga una matriz de 5x5 llena de puros
numeros enteros y positivos. Luego, escribe un algoritmo para sumar
todos los numeros en la matriz. */
const prompt = require("prompt-sync")({sigint: true});

let sumar= (matriz,suma)=>{
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < 5; j++) {
                suma+=matriz[i][j];
        }    
    }
    return suma;
}

let suma=0;
let matriz= [
    [2, 4, 6 ,8 ,10],
    [3, 6, 9 ,12 ,15],
    [4, 8, 12, 16 ,20],
    [8, 6, 4, 2, 0],
    [5, 10, 15, 20, 25]
];

suma= sumar(matriz, suma);
console.log(`La suma total de la raiz es: ${suma}`);