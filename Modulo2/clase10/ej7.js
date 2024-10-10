/*Ejercicio 7: Uso de Arrays y Condicionales
Crea un programa que solicite al usuario ingresar 5 nombres y los
almacene en un array. Luego, solicita al usuario ingresar un nombre y
verifica si ese nombre se encuentra en el array. (Pueden desglosar en
pasos el código si eso les facilita su desarrollo)*/

const prompt = require("prompt-sync")({sigint: true});

let nombres=[];
let aux;
let flag=false;

for (let i=0; i<5; i++){
    nombres[i]= prompt("Ingrese un nombre: ");    
}

aux= prompt("Ingrese el nombre a buscar: ");

for ( i=0; i<5 ;i++){
    if(aux==nombres[i]){
        console.log("Felicidades, el nombre aparece en el array");
        flag=true;
    }
}

if(flag==false){
    console.log("Disculpe, su nombre no aparece en el array.");
}
