/*Ejercicio 4: Clases y Objetos
1. Define una clase llamada Animal con propiedades nombre y tipo, y un
método hacerSonido().
2. Crea una instancia de la clase Animal y llama al método.
 */

class Animal{
    public nombre: string;
    public tipo: string;
    
    constructor(nombre: string,tipo: string ){
        this.nombre= nombre;
        this.tipo= tipo;
    }

    public hacerSonido(sonido: string): void{
        console.log(`El ${this.tipo} hace el siguiente ruido: ${sonido}`);
    }
}

const gato= new Animal("Pepito", "gato");

gato.hacerSonido("miau");