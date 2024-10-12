/* Consigna: Crea una función llamada listarLibros que acepte un array de objetos
libro, donde cada libro tiene las propiedades titulo (string) y autor (string). La
función debe recorrer el array y mostrar los detalles de cada libro en la consola.*/

export let libro1= crearLibro("Crimen y castigo","Fedor Dostoievski");
export let libro2= crearLibro("Preludio a la fundacion","Isac Asimov"); 
export let libro3= crearLibro("Cumbres borrascosas","Emily Bronte"); 

export let libros : object[] = [libro1, libro2, libro3];

listarLibros(libros);

function listarLibros(libros : object[]) : void{
    libros.forEach(libro => {
        console.log(libro);
    });
}

function crearLibro(titulo: string, autor: string): object {
    let libro: {title:string, author: string}={
        title:titulo,
        author: autor
    };
    
    return libro;
}