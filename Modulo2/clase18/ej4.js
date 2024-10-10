/*Ejercicio 4: Transformación y Análisis de Cadenas
Pide al usuario que ingrese una lista de nombres separados por comas.
Los nombres a ingresar deben ser “Julian”, “Maria”, “Malena”, “Andrea”, “Pablo” y “Pedro”.
Luego, escribe la función “transformarYAnalizarNombres”que realice las siguientes tareas:
1. Quite los espacios en blanco alrededor de cada nombre.
2. Verifique si existe el nombre "Juan".
3. Reemplace todos los nombres "María" por "Ana".
4. Encuentre el índice del nombre "Pedro".
5. Devuelva una cadena de nombres en orden alfabético separados por puntos. Investigar el método “.sort()” */

const prompt = require("prompt-sync")({sigint: true});

let nombres=[];
transformarYAnalizarNombres();

for (let i = 0; i < nombres.length; i++) {
    nombres[i]=prompt("Ingrese nombres separados por comas: ");    
}

function trasformarYAnalizarNombres() {
    let sacarEspacios= nombres.split(",").map(nombre=>nombre.trim());
    console.log(sacarEspacios);
    
}