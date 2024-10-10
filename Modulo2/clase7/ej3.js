const prompt = require("prompt-sync")({sigint: true});

const EDAD_MINIMA= 18;
const EDAD_MAXIMA= 99;
let edad;

edad= parseInt(prompt("Ingrese su edad: "));

if(edad>=EDAD_MINIMA && edad<= EDAD_MAXIMA){
    console.log("La edad ingresada está dentro del rango permitido");
}else{
    console.log("La edad ingresada no está dentro del rango permitido");
}