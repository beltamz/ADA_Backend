/*Consigna: Crea una función llamada crearLibro que acepte tres parámetros:
titulo (string), autor (string) y paginas (number). La función debe devolver un
objeto con esas propiedades. Luego, crea dos libros utilizando la función y
muestra sus detalles en la consola.
 */

function crearLibro(titulo:string, autor: string, paginas: number) : object {
   
    let libro : {title:string, author: string, pages: number}={
        title: titulo,
        author: autor,
        pages: paginas
    };

    return libro;
};

console.log(crearLibro("1984", "Orwell", 349));
console.log(crearLibro("La casa de los espiritus", "Isabel Allende", 459));