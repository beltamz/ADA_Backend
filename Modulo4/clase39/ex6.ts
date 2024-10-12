/* Consigna: Crea una función llamada crearPersona que acepte tres parámetros:
nombre (string), edad (number), y pais (string). La función debe devolver un
objeto que tenga esas propiedades. Luego, imprime el objeto retornado en la
consola.
*/

function crearPersona(nombre:string, edad: number, pais: string): object {
    let persona : {name:string, age: number, country: string}={
        name: nombre,
        age: edad,
        country: pais
    };

    return persona;
}

export let persona1=crearPersona("Maria", 54, "Argentina");
export let persona2=crearPersona("Santos", 39, "Uruguay");

console.log(persona1);
console.log(persona2);