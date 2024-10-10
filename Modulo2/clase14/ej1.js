/* • Ejercicio 1: El deportista
Para este ejercicio deberán definir un objeto literal “deportista”, con los
siguientes atributos: nombre, energía, experiencia.
Ademas queremos poder pedirle al deportista que entrene. Para esto,
nuestro trabajo va a ser realizar una función “entrenarHoras.”
La función entrenarHoras tiene las siguientes tres características:
✓ Recibe por parámetro la cantidad de horas.
✓ Resta a su energía (this.energia) la cantidad de horas x 5.
✓ Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
Una vez definida la función, podemos ejecutar el código y ver cómo va
variando la energía y experiencia del deportista por consola*/

const prompt = require("prompt-sync")({sigint: true});

let deportista={
    nombre: "Pedro Rodriguez",
    energia: 100 ,
    experiencia: 205,
    entrenarHoras: function(cantHs){
            this.energia -=cantHs*5;
            this.experiencia -= cantHs*2;
    } 
}

let cantHs= parseInt(prompt("Ingrese la cantidad de horas entrenadas: "));
console.log("Antes de entrenar");
console.log("Deportista: " + deportista.nombre + ".\n Energia: " + deportista.energia + ". \n Experiencia: " + deportista.experiencia);
console.log("--------------------------");
deportista.entrenarHoras(cantHs);
console.log("Despues de entrenar: ");
console.log("Deportista: " + deportista.nombre + ".\n Energia: " + deportista.energia + ". \n Experiencia: " + deportista.experiencia);