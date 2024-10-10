const prompt = require("prompt-sync")({sigint: true});

let celsius;
let fahrenheit;

celsius=parseFloat(prompt("Ingrese los grados celsius: "));

fahrenheit= celsius * 9/5 + 32 ;

console.log("Los " + celsius + " °C equivalen a " + fahrenheit + " °F");