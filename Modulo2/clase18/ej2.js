/*Ejercicio 2: Análisis y Modificación de Cadenas de Texto
Pide al usuario que ingrese una oración. Luego, escribe la función “procesarOracion” que haga lo siguiente:
1. Quite los espacios en blanco al principio y al final.
2. Divida la oración en palabras.
3. Reemplace todas las vocales 'a' por '@'. Tener en cuenta utilizar “/a/g” que indica que se debe buscar todas las apariciones del
carácter 'a' en la cadena (la bandera g es para global, lo que significa que reemplazará todas las apariciones, no solo la primera).
4. Encuentre la posición de la primera aparición de la palabra "javascript". De no aparecer retornar -1
5. Convierta la oración a una cadena de palabras separadas por guiones.*/

const prompt = require("prompt-sync")({sigint: true});

let oracion= prompt("Ingrese una oración: ");
procesarOracion(oracion);

function procesarOracion(oracion){
    let nuevaOracion= oracion.trim();
    console.log("Oracion separada en palabras: ");
    console.log(nuevaOracion.split(" ")); 
    console.log("Reemplazamos a por @: ");
    console.log(nuevaOracion.replace(/a/g, "@"));
    console.log("Aparición palabra javascript:");
    let resultado= nuevaOracion.indexOf("javascript");
    if(resultado>=0){
        console.log("La palabra aparece");
    }else{
        console.log(resultado);
    };
    console.log("Oracion separada con - : ");
    console.log(nuevaOracion.replace(/ /g, "-")); 
}