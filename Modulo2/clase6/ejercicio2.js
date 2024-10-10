const prompt = require("prompt-sync")({sigint: true});

let numero1;
let numero2;
let numero3;
let numMayor;

numero1= parseFloat(prompt("Ingrese el 1er numero: "));
numero2= parseFloat(prompt("Ingrese el 2do numero: "));
numero3= parseFloat(prompt("Ingrese el 3er numero: "));


if(numero1>numero2){
  numMayor=numero1;
}else if(numero2>numero1){
    numMayor=numero2;
}

if(numero3>numMayor){
    numMayor=numero3;
}

console.log("Su numero mayor es " + numMayor);