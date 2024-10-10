const prompt = require("prompt-sync")({sigint: true});

let numero1= parseFloat(prompt("Ingrese un valor: "));
let numero2= parseFloat(prompt("Ingrese otro valor: "));

if(numero1==numero2){
    console.log("Ambos numeros son iguales");
}else if(numero1>numero2){
    console.log("El primer numero es mayor");
}else if(numero2>numero1){
    console.log("El segundo numero es mayor");
}