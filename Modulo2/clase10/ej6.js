/*Ejercicio 6: Bucle For – Array
Escribe un programa en JavaScript que clasifique diferentes animales
en tres categorías: "mamífero", "ave" o "reptil". Se te proporciona un
array llamado animales que contiene nombres de diferentes animales.
Utiliza un bucle for y operadores ternarios para crear un nuevo array
llamado clasificacion que contenga la clasificación de cada animal
según su tipo.*/

const prompt = require("prompt-sync")({sigint: true});

let animales= ["perro", "gato", "loro", "serpiente", "elefante" , "aguila"];
let clasificacion=[];

for(let i=0; i<6; i++){
    switch(animales[i]){
        case "perro":
        case "gato":
        case "elefante":
            clasificacion[i]= "mamífero";
        break;
        case "loro":
        case "aguila":
            clasificacion[i]="ave";
        break;
        case "serpiente":
            clasificacion[i]="reptil";
        break;
    }
}

for(let j=0; j<6 ; j++){
    console.log("Animal " + (j+1) + " : " + animales[j] + ", es de tipo " + clasificacion[j]);
}
