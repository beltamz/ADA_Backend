/* 
Ejercicio 2: filter() “Alumnos”
Necesitamos enviarle un diploma a los alumnos que están aprobados y un e-mail a los alumnos desaprobados para acordar un recuperatorio. 
Por lo tanto, necesitamos dos listas: una lista que almacene todos los aprobados y otra los desaprobados. Deberemos guardarlos en las variables aprobados y desaprobados respectivamente.
Además de hacer esto, deberemos realizar las siguientes operaciones:
Filtra los estudiantes en dos listas: aprobados y desaprobados.
Manipula la lista de aprobados agregando un estudiante al inicio y otro al final.
Manipula la lista de desaprobados eliminando al primero y al último estudiante.
Utiliza map junto con indexOf para buscar un estudiante específico en la lista de aprobados y muestra su índice si está presente.
Utiliza includes para verificar si un estudiante está en la lista de desaprobados y muestra un mensaje indicando su presencia.
Muestra las listas de aprobados y desaprobados actualizadas después de todas las operaciones.
*/
const prompt = require("prompt-sync")({sigint: true});

function busquedaAprobados(aprobados) {
    let nombreBusqAprob= prompt('Ingrese el nombre a buscar en aprobados: ');   

    let busqueda= aprobados.map(function(aprobados){
        return aprobados.nombre;
    });

    let esta= busqueda.indexOf(nombreBusqAprob);

    if(esta>=0){
        console.log("Su nombre aparece en el indice " + esta);
    }else{
        console.log("Su nombre no aparece en la lista de aprobados");
    }
}

function busquedaDesaprobados(desaprobados) {
    let nombreBusqDes= prompt("Ingrese el nombre a buscar en desaprobados: ");

    let verificar=desaprobados.map(function(desaprobados){
        return desaprobados.nombre;
    });

    let estaDes=verificar.includes(nombreBusqDes);

    if(estaDes){
        console.log("El nombre aparece en la lista de desaprobados");
    }else{
        console.log("El nombre no aparece en la lista de desaprobados");
    }
}

function impresionConsola(aprobados, desaprobados) {
    console.log("APROBADOS:");
    console.log(aprobados);
    console.log("DESAPROBADOS:");
    console.log(desaprobados);    
}

let alumnos=[
    {nombre:"John",promedio: 8.5 , aprobado:true},
    {nombre:"Jane",promedio: 7, aprobado:true },
    {nombre:"June",promedio: 3, aprobado:false },
    {nombre:"Jake",promedio: 4, aprobado: false},
    {nombre:"Jill",promedio: 9, aprobado: true}
];

let aprobados=alumnos.filter(function(alumnos){
    return alumnos.aprobado==true;
});

let desaprobados= alumnos.filter(function(alumnos){
    return alumnos.aprobado==false;
});

console.log("-------Listas antes de los cambios------");
impresionConsola(aprobados, desaprobados);

aprobados.unshift({nombre: "Luna", promedio:7 , aprobado:true});
aprobados.push({nombre: "Mario", promedio:9, aprobado: true});
desaprobados.shift();
desaprobados.pop();

console.log("-------Listas despues de los cambios------");
impresionConsola(aprobados, desaprobados);
busquedaAprobados(aprobados);
busquedaDesaprobados(desaprobados);