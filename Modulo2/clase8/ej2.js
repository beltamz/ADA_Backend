const prompt = require("prompt-sync")({sigint: true});

const RANGO_MINIMO=20;
const RANGO_MAXIMO=50;

let numUsuario= parseFloat(prompt("Ingrese un numero: "));

if(numUsuario>=RANGO_MINIMO && numUsuario<=RANGO_MAXIMO){
    console.log("El numero está dentro del rango");
}else{
    console.log("El numero no está dentro del rango");
}
