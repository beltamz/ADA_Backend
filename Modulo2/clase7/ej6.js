const prompt = require("prompt-sync")({sigint: true});

let nUno;
let nDos;

nUno= parseFloat(prompt("Ingrese un valor: "));
nDos= parseFloat(prompt("Ingrese otro valor: "));

if(nUno>10 && nDos>10){
    console.log("Ambos numeros ingresados son mayores a 10.");
}else{
    console.log("Ambos numeros no son mayores a 10.");
}
