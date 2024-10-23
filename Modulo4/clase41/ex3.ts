/*Ejercicio 3: Métodos en Objetos

1. Modifica el objeto del ejercicio anterior para que incluya un método
llamado descripcion() que devuelva una descripción del libro.
2. Llama al método y muestra el resultado en la consola. */

export const libro={
    titulo: "La casa de los espiritus",
    autor: "Isabel Allende",
    anioPublicacion: 1970,
    descripcion: ()=>{
        return `Nombre del libro: ${libro.titulo}\nAutor: ${libro.autor}\nAño de publicación: ${libro.anioPublicacion}`;
    }
};

console.log(libro.descripcion());