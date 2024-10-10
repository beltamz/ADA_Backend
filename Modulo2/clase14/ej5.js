/* • Ejercicio 5: Flores Favoritas
Escribe un programa en JavaScript para contar cuántas veces el usuario
menciona sus flores favoritas. Utiliza un array para almacenar las flores
favoritas y realiza las siguientes acciones:
1. Inicializa un array vacío para almacenar las flores favoritas.
2. Pregunta al usuario por sus tres flores favoritas utilizando prompt y
agrega cada una al array (aquí usa un método de los vistos en Arrays)
3. Pregunta al usuario por una flor específica y verifica si está entre sus
favoritas (aquí usa un método de los vistos en Arrays)
4. Muestra por consola cuántas de las flores favoritas se mencionaron.
Pista: Se utiliza el método includes.*/

const prompt = require("prompt-sync")({sigint: true});

function ingresoFloresFavoritas(floresFavoritas) {
    let flor;
    
    for (let i = 0; i < 3; i++) {
        flor=prompt("Ingrese una de sus flores favoritas: ");    
        floresFavoritas.push(flor);
    }
}

function ingresoFloresABuscar(floresFavoritas, floresEspecificas,n) {
    let florBuscar;
    let encontrado;

    for (let i = 0; i < 3; i++) {
        florBuscar= prompt("Ingrese una flor: ");
        encontrado= floresFavoritas.includes(florBuscar);
        if(encontrado==true){
            n++;  
            floresEspecificas.push(florBuscar);
        }
    }
    return n;
}

function impresionConsola(i, floresEspecificas) {
    if(i==0){
        console.log(`Las flores ingresadas no aparecen en la lista`);
    }else if(i==1){
        console.log(`De las flores ingresadas, solo aparece (${floresEspecificas}) ${i} vez en la lista`);
    }else{
        console.log(`De las flores ingresadas, aparecen (${floresEspecificas}) ${i} veces en la lista`);
    }
}

let floresFavoritas=[];
let floresEspecificas=[];
let n=0;


ingresoFloresFavoritas(floresFavoritas);
let i= ingresoFloresABuscar(floresFavoritas, floresEspecificas,n);
impresionConsola(i, floresEspecificas);






