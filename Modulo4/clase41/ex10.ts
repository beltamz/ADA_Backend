/*Ejercicio 10: Registro de Estudiantes
1. Crea un sistema para registrar Estudiantes con las siguientes clases:
o Estudiante: Clase que incluye propiedades como nombre, edad y
curso, además de un método que muestre la información del
estudiante.
o RegistroEstudiantes: Clase que maneje una lista de estudiantes, con
métodos para agregar un estudiante y mostrar todos los estudiantes
registrados. */

class Estudiante{
    public nombre: string;
    public edad: number;
    public curso: string;

    constructor(nombre: string,edad: number,curso: string){
        this.nombre= nombre;
        this.edad= edad;
        this.curso= curso;
    }

    public mostrar(): void{
        console.log(`Nombre: ${this.nombre}\nEdad: ${this.edad}\nCurso: ${this.curso}\n----------`);
    }
}

class RegistroEstudiantes{
    public listaAlumnos: Estudiante[]=[];
 
    public agregarEstudiante(nuevoEst: Estudiante):void{
        this.listaAlumnos.push(nuevoEst);
    }

    public mostrarEstudiantes(): void{
        this.listaAlumnos.forEach(estudiante=>{
            estudiante.mostrar();
        })
    }
}

let registro= new RegistroEstudiantes();

let est1=new Estudiante("Pedro", 14, "3A");
registro.agregarEstudiante(est1);

let est2= new Estudiante("Maria", 14,"3B");
registro.agregarEstudiante(est2);

console.log(`Estudiantes registrados:`);
registro.mostrarEstudiantes();