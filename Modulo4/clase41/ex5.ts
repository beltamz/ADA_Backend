/* Ejercicio 5: Interfaz

1. Define una interfaz llamada IPersona con propiedades nombre, edad y un
método presentarse().
2. Crea una clase llamada Persona que implemente esta interfaz y
proporciona la implementación del método presentarse().*/

interface IPersona{
    nombre: string;
    edad: number;

    presentarse():void
}

class Persona implements IPersona{
    constructor(public nombre: string,public edad: number){

    }

    public presentarse(): void{
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años`);
    }
}

const persona1= new Persona("Josefina",45);

persona1.presentarse();