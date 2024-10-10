/* Ejercicio 3: reduce() “Maraton”
Nos dejaron un array con las vueltas que dio una corredora entrenando en distintos momentos para una maratón.Nuestro desafío será crear la variable totalVueltas y almacenar en ella el total, usando el método reduce.
Además de hacer esto, deberemos realizar las siguientes operaciones:

-Añadir una vuelta al principio del array: Usamos unshift para agregar la vuelta 7 al principio del array vueltas.
-Eliminar la última vuelta del array: Usamos pop para eliminar la última vuelta del array y guardarla en la variable ultimaVuelta.
-Verificar si la vuelta 10 está en el array y agregarla al final si no está presente: Usamos includes para verificar si la vuelta 10 está en el array y push para agregarla al final si no está.
-Eliminar la primera vuelta del array: Usamos shift para eliminar la primera vuelta del array y guardarla en la variable primeraVuelta.
Verificar si la vuelta 15 está en el array y agregarla al principio si no está presente: Usamos includes para verificar si la vuelta 15 está en el array y unshift para agregarla al principio si no está.
Calcular el nuevo total de vueltas usando reduce: Después de todas las operaciones, recalculamos el total de vueltas utilizando reduce.
*/

const prompt = require("prompt-sync")({sigint: true});

let vueltas=[5, 8, 12, 3, 22];

let totalVueltas= vueltas.reduce(function(acumulador, vueltas){
    return acumulador+ vueltas;
});
console.log("Primer suma de vueltas: \n" + totalVueltas);

vueltas.unshift(7);
let ultimaVuelta= vueltas.pop();
console.log("Agregamos 7/ Sacamos 22: \n" + vueltas);

let estaDiez= vueltas.includes(10);
if (!estaDiez) {
    vueltas.push(10);
}
console.log("Agregamos 10 al final si no está: \n" + vueltas);

let primeraVuelta= vueltas.shift();
console.log("Eliminamos el 1er valor: \n" + vueltas);

let estaQuince= vueltas.includes(15);
if (!estaQuince) {
    vueltas.unshift(15);
}
console.log("Agregamos 15 al principio si no está: \n"+ vueltas);

let nuevoTotalVueltas= vueltas.reduce(function(acumulador, vueltas){
    return acumulador+ vueltas;
})

console.log("Segunda suma de vueltas: \n" + nuevoTotalVueltas);