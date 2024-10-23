/*Ejercicio 9: Sistema de Gestión de Vehículos
1. Crea un sistema de gestión de Vehículos que incluya las siguientes clases:
o Vehiculo: Clase base con propiedades como marca, modelo y un
método para mostrar información del vehículo.
o Coche: Clase que extiende Vehiculo e incluye una propiedad para
tipoCombustible y un método para mostrar la información completa
del coche.
o Motocicleta: Clase que extiende Vehiculo e incluye una propiedad
para cilindrada y un método para mostrar la información completa
de la motocicleta. */

class Vehiculo{
    public marca: string;
    public modelo: string;

    constructor(marca: string,modelo: string){
        this.marca=marca;
        this.modelo= modelo;
    }

    public mostrar(): void{
        console.log(`--Datos del vehiculo--\nMarca: ${this.marca}\nModelo: ${this.modelo}`);
    }
}

export class Coche extends Vehiculo{
    public tipoCombustible:string;

    constructor(marca: string,modelo: string , tipoCombustible:string){
        super(marca, modelo);
        this.tipoCombustible= tipoCombustible;
    }

    public mostrar(): void {
        super.mostrar();
        console.log(`Tipo combustible: ${this.tipoCombustible}`);
    }
}

class Motocicleta extends Vehiculo{
    public cilindrada:number;

    constructor(marca: string,modelo: string ,cilindrada:number){
        super(marca, modelo);
        this.cilindrada=cilindrada;
    }

    public mostrar(): void {
        super.mostrar();
        console.log(`Cilindrada: ${this.cilindrada} CV`);
    }
}

const coche1= new Coche("Fiat","Cronos","Diesel");
const motocicleta1= new Motocicleta("Ducati","Superleggera V4", 224)

coche1.mostrar();
motocicleta1.mostrar();