/* Ejercicio 8: Integramos contenidos - Animales
1. Crea un pequeño sistema de gestión de Animales que incluya las clases
Animal, Mascota, y MascotaExotica.
o La clase Animal debe tener propiedades como nombre y tipo.
o La clase Mascota debe extender Animal e incluir una propiedad para
dueño.
o La clase MascotaExotica debe extender Animal e incluir una
propiedad para habitat.
2. Implementa métodos para mostrar información sobre cada tipo de animal
y agrega ejemplos de instanciación.
*/

export class Animal{
    public nombre:string;
    public tipo: string;

    constructor(nombre:string,tipo: string ){
        this.nombre= nombre;
        this.tipo=tipo;
    }

    public mostrar():void{
        console.log(`Datos de la mascota\nNombre: ${this.nombre}\nTipo: ${this.tipo}`);
    }
}

class Mascota extends Animal{
    public duenio: string;
    
    constructor(nombre: string, tipo: string, duenio:string){
        super(nombre, tipo);
        this.duenio= duenio;
    }

    public mostrar():void{
        super.mostrar();
        console.log(`Dueño: ${this.duenio}`);
    }
}

class MascotaExotica extends Animal{
    public habitat:string;

    constructor(nombre:string,tipo: string ,habitat:string){
        super(nombre, tipo);
        this.habitat= habitat;
    }

    public mostrar():void{
        super.mostrar();  
        console.log(`Habitat: ${this.habitat}.`);
    }
}

const mascota1= new Mascota("Pepito", "Perro", "Maria");
const mascotaEx1= new MascotaExotica("Rango","Iguana","Bosques");

mascota1.mostrar();
mascotaEx1.mostrar();