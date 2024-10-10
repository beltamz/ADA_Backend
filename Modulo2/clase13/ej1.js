/*• Ejercicio 1: Conversor de monedas
Solicita al usuario un monto en dólares y una tasa de cambio a pesos. Usa
una función flecha para convertir el monto a pesos.
 */

const prompt = require("prompt-sync")({sigint: true});

let calculo= (montoDolares, tasaCambio)=> montoDolares*tasaCambio;

let montoDolares= parseFloat(prompt("Ingrese el monto en dólares: "));
let tasaCambio= parseFloat(prompt("Ingrese la tasa de cambio: "));

let resultado= calculo(montoDolares,tasaCambio);

console.log(`Sus ${montoDolares} USD equivalen a ${resultado} pesos.`);
