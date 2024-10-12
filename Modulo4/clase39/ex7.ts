/*Consigna: Crea una función llamada aumentarSalario que acepte un objeto
empleado con las propiedades nombre (string) y salario (number), y un número
que represente el porcentaje de aumento. La función debe aumentar el salario
del empleado y devolver el nuevo salario. Muestra en la consola el resultado. */

export let empleado : {nombre: string, salario: number}={
    nombre: "Manuel",
    salario: 300000
};

console.log(`Salario de ${empleado.nombre} : ${empleado.salario}`);

function aumentarSalario(empleado : {nombre: string, salario: number}, porcentaje: number): object {
    let montoAAumentar= empleado.salario*(porcentaje/100);
    empleado.salario += montoAAumentar;
    return empleado;
};

aumentarSalario(empleado, 20);

console.log(`Nuevo salario de ${empleado.nombre} : $ ${empleado.salario}`);