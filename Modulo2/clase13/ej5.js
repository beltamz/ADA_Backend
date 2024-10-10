/*• Ejercicio 5: Números Naturales
Se ingresa por teclado un número natural de hasta 2 cifras, si tiene una cifra
que muestre lo mínimo que le falta para ser un número de 2 cifras; de lo
contrario, que muestre lo mínimo que le falta para ser un número de 3 cifras.
Considerar que el usuario ingresa números de hasta dos cifras. */

const prompt = require("prompt-sync")({sigint: true});

function resolver(num, unidad){
    let cuantoFalta=0;
    
    if(num<10){
        cuantoFalta= 10-num;
    }else if( num>10 && num<100){
        cuantoFalta=100-num;
        unidad=false;
    }
    return cuantoFalta;
}

function cantCifras(unidad, num, resultado){
    if(unidad==true){
        console.log("Para que su numero " + num + " llegue a las 2 cifras hay que sumarle " + resultado);
    }else{
        console.log("Para que su numero " + num + " llegue a las 3 cifras hay que sumarle " + resultado);
    }
}

let unidad= true;
let num=0;
do {
    num= parseInt(prompt("Ingrese un valor: ")); 
} while (num>100);

let resultado= resolver(num, unidad);
cantCifras(unidad, num, resultado);




