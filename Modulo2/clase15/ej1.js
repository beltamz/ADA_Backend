/* Ejercicio 1: Iguales a 10 pero menores de 1000
Dada una matriz, recorrer sus valores y sumar solo los números que estén por
encima o sean iguales a 10, pero menores que 1000.*/
const prompt = require("prompt-sync")({sigint: true});

function recorrerMatriz(matriz, suma) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < 4; j++) {
            if(matriz[i][j]>=10 && matriz[i][j]<1000){
                suma+=matriz[i][j];
            }
        }  
    }    
    return suma;
}

let suma=0;
let matriz=[
    [10,3,2,1,4],
    [5 ,5,10,100,4],
    [5 ,125,10,1020,4],
    [5 ,5,5097,100,4]
];

let resultado=recorrerMatriz(matriz, suma);

console.log(`La suma de sus numeros (>10 y <1000) es: ${resultado}`);
