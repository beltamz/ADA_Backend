/* Ejercicio 1: map() “Hagamos lío...”
Nos dejaron una lista con los horarios de partida de algunos aviones. Esta lista se reproduce directamente en las pantallas del aeropuerto y, a modo de travesura, queremos adelantar una hora cada partida. 
✓Nuestro trabajo será utilizar el método map para poder lograrlo y almacenar la lista en una variable nueva llamada horariosAtrasados.
Además de hacer esto, deberemos realizar las siguientes operaciones:
*/

const prompt = require("prompt-sync")({sigint: true});

let horariosPartida=[12, 14, 18, 21];

//Adelantar una hora cada partida
let horariosAtrasados= horariosPartida.map(function(horario){
    return horario+1;
});

//Añadir un nuevo horario (10)al principio de la lista
horariosPartida.unshift(10);

//Eliminar el último horario de la lista y lo guardamos en ultimoHorario.
let ultimoHorario= horariosPartida.pop();

//Verificar si el horario 14 está en la lista y agregarlo al final si no está presente
let estaCatorce = horariosPartida.includes(14);
if(!estaCatorce){
    horariosPartida.push(14);
}

//Encontrar la posición del horario 18 y eliminarlo si está presente
let estaDieciocho= horariosPartida.indexOf(18);
if(estaDieciocho>0){
    horariosPartida.splice(estaDieciocho,1);
}

//Añadir el horario eliminado en el paso 2 al final de la nueva lista de horarios atrasados(adelantado una hora)
horariosAtrasados.push(ultimoHorario+1);

//Mostrar la lista final de horarios atrasados
console.log(horariosAtrasados);

//Eliminar el primer elemento de la lista de horarios atrasados
horariosAtrasados.shift();

//Verificar si el horario 9 está en la lista y agregarlo al principio si no está presente
let estaNueve= horariosPartida.includes(9);
if(!estaNueve){
    horariosPartida.unshift(9);
}

//Mostrar la lista final después de todas las operaciones
console.log(horariosAtrasados);
console.log(horariosPartida);