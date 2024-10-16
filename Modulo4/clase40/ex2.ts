/*Ejercicio 2: Tuplas para almacenar información
1. Declara una tupla para representar un libro con la siguiente información:
título (string), año de publicación (número) y si está disponible (booleano).
2. Inicializa la tupla con los valores: "El principito", 1943, true.
3. Imprime el título del libro y el año de publicación.
4. Cambia el valor de disponibilidad a false y muestra el nuevo valor por
consola.*/

let libro: [string, number, boolean];
libro=["El principito", 1943, true];

console.log(`Titulo del libro: ${libro[0]}`);
console.log(`Año de publicacion: ${libro[1]}`);

libro[2]= false;
console.log(`¿Está disponible actualmente? ${libro[2]}`);