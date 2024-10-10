/*Ejercicio 1: Switch
Declará las variables vehiculo y litrosConsumidos. A continuación,
realizá los cálculos para obtener el total a pagar, teniendo en cuenta las
siguientes consideraciones:
✓ Si el vehículo es “coche”, el precio por litro es de $86.
✓ Si el vehículo es “moto”, el precio por litro es de $70.
✓ Si el vehículo es “autobús”, el precio por litro es de $55.
✓ Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al
total a pagar.
✓ Si los litros consumidos son mayores a 25, se ha de añadir $25 al
total a pagar.
Finalmente, imprimí en consola el total a pagar.*/

const prompt = require("prompt-sync")({sigint: true});

let vehiculo=prompt("Ingrese el tipo de vehiculo: ");
let litrosConsumidos=parseInt(prompt("Ingrese la cantidad de litros consumidos"));
let aux;

switch(vehiculo){
    case "coche":
        aux= litrosConsumidos * 86;
    break;
    case "moto":
        aux= litrosConsumidos * 70;
    break;
    case "autobus":
        aux= litrosConsumidos *55;
    break;
    default:
        console.log("Ingresó un vehiculo incorrecto");
}

if(litrosConsumidos>=0 && litrosConsumidos<=25){
    aux= aux + 50;
}else if(litrosConsumidos>25){
    aux=aux+ 25;
}

console.log("El monto total a pagar es de : " + aux + "$.");

