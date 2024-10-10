const prompt = require("prompt-sync")({sigint: true});

let lado1=parseFloat(prompt("Ingrese el valor del 1er lado:"));
let lado2=parseFloat(prompt("Ingrese el valor del 2do lado:"));
let lado3=parseFloat(prompt("Ingrese el valor del 3er lado:"));

console.log("Acorde a sus datos ingresados: ")

if(lado1==lado2==lado3){
    console.log("Es un triangulo equilatero");
}else if(lado1==lado2 || lado2==lado3 || lado3==lado1){
    console.log("Es un triangulo isósceles");
}else{
    console.log("Es un triangulo escaleno");
}