const prompt = require("prompt-sync")({sigint: true});

let numero1=parseFloat(prompt("Ingrese un numero: "));
let numero2=parseFloat(prompt("Ingrese un numero: ")); 
let numero3=parseFloat(prompt("Ingrese un numero: ")); 
let numMayor=0;

if(numero1>numero2){
    numMayor=numero1;
}else if(numero2>numero1){
    numMayor=numero2;
}else if(numero3>numMayor){
    numMayor= numero3;
}

console.log(`El numero mayor es ${numMayor} . `);