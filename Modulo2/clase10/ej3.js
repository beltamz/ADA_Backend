/*Ejercicio 3: While
Crea un programa que solicite al usuario ingresar números
continuamente hasta que el usuario ingrese un número negativo.
Luego, imprime la suma de todos los números ingresados.*/

const prompt = require("prompt-sync")({sigint: true});

let numero=0;
let negativo= false;
let suma=0;

while(negativo==false){
    numero=parseInt(prompt("Ingrese un valor: "));
    if(numero<0){
        negativo=true;
        break;
    }
    suma += numero;
}

console.log("La suma de los valores ingresados es de: " + suma + ".");