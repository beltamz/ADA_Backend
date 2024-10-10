/*• Ejercicio 1: Manipulación Completa de un Objeto Literal y Arrays
Crea un objeto literal que represente un estudiante. El mismo debe tener
las siguientes propiedades: nombre, edad y un array de notas (con 5
notas).
Luego, escribe la función “procesarEstudiante” que tendrá como objetivo
realizar las siguientes tareas:
1. Agregar una nueva nota al array de notas.
2. Eliminar la primera nota del array.
3. Calcular el promedio de las notas restantes.
4. Convertir el nombre del estudiante a mayúsculas. Para esto
investiga sobre el método “toUpperCase()”
5. Devuelver un objeto con el nombre en mayúsculas y el promedio de
las notas. */

let estudiante={
    nombre:"Pedro",
    edad:"20",
    notas:[6,7,5,4,8],
}

function procesarEstudiante(estudiante) {
    estudiante.notas.push(9); 
    estudiante.notas.shift(); 
    let suma= estudiante.notas.reduce((acumulador, numero)=>{
        return acumulador+numero;
    });
    estudiante["promedio"]=suma/estudiante.notas.length;
    
    estudiante.nombre= estudiante.nombre.toUpperCase();

    return estudiante;
}
console.log("----Antes de los cambios----");
console.log(estudiante);
procesarEstudiante(estudiante);
console.log("----Después de los cambios----");
console.log(estudiante);
