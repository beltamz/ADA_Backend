/*Ejercicio 3: Número secreto
Escribí un programa que piense un número de forma aleatoria del 1 al 10 y
le pida al usuario que lo trate de adivinar. Si el número es correcto debe
imprimir en la consola “Felicitaciones, ¡ese era!", de lo contrario, debe
imprimir "Lo siento, ¡intenta nuevamente!"*/

const prompt = require("prompt-sync")({sigint: true});

let numAleat=()=> Math.floor(Math.random()*(10-1+1))+1;

let flag= false;
let numero= numAleat();

do {
    let adivinar= parseInt(prompt("Ingrese un valor: "));
    if(adivinar==numero){
        console.log("Felicitaciones, ¡ese era!");
        flag=true;
    }else{
        console.log("Lo siento, ¡intenta nuevamente!")
    }
} while (flag==false);
