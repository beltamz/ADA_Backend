/*• Ejercicio 2: Verificar estado de vacunación
Solicita al usuario el nombre de su mascota y si está vacunada. Usa una
función flecha para verificar y mostrar su estado de vacunación. */

const prompt = require("prompt-sync")({sigint: true});

let nombre= prompt("Ingrese el nombre de su mascota: ");
let estaVacunada= prompt("Esta vacunada? si / no");

let estado= (nombre, estaVacunada)=>{
    if(estaVacunada=="si"){
        console.log(`Su mascota ${nombre} tiene su vacunación al día.`);
    }else{
        console.log(`Su mascota ${nombre} no tiene su vacunación al día.`);
    }
}

estado(nombre, estaVacunada);
