/* Ejercicio 4: Manipulación de Arrays
1. Crea un array que contenga los nombres de tus 5 frutas favoritas.
2. Usa un método para añadir otra fruta al final del array.
3. Encuentra el índice de una fruta específica (por ejemplo, "Manzana")
dentro del array.
4. Elimina la última fruta y muestra el array actualizado por consola.*/

let frutasFavoritas: string[]=["sandia", "frutilla", "melon", "naranja", "anana"];

frutasFavoritas.push("mandarina");

let indiceFrutilla: number=frutasFavoritas.indexOf("frutilla");
console.log(`Indice de la frutilla: ${indiceFrutilla}.`);

frutasFavoritas.pop();
console.log(frutasFavoritas);