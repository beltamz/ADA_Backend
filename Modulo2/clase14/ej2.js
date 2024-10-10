/*Ejercicio 2: Libros
Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
✓ título: una cadena con el título del libro.
✓ autor: una cadena con el nombre del autor del libro.
✓ anioPublicacion: un número con el año de publicación del libro.
Luego, crea una función llamada mostrarLibro que tome un arreglo de libros
como parámetro y muestre por consola la información de cada libro en el
formato especificado.
 */

const prompt = require("prompt-sync")({sigint: true});

let libro1={
    titulo: "Como agua para chocolate",
    autor:"Laura Esquivel Valdés",
    anioPublicacion: 1989 ,
    cargarLibro: function(libros){
        libros.push(libro1);  
    }
}

let libro2={
    titulo: "La casa de los espiritus",
    autor:"Isabel Allende",
    anioPublicacion: 1982 ,
    cargarLibro: function(libros){
        libros.push(libro2);
    }
}

function imprimirLibro(libros){
    for (let i = 0; i < libros.length; i++) {
        console.log("Título: " + libros[i].titulo);
        console.log("Autor: " + libros[i].autor);
        console.log("Año publicación: " + libros[i].anioPublicacion);
        console.log(" ________________________________");
    }
    }

let libros= [];
libro1.cargarLibro(libros);
libro2.cargarLibro(libros);
imprimirLibro(libros);