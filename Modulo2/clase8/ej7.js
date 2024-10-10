const prompt = require("prompt-sync")({sigint: true});

let pesoKg= parseFloat(prompt("Ingrese su peso: "));
const LIBRA=2.20462;
let conversion= pesoKg* LIBRA;

console.log(`Usted pesa...`);
console.log(`En kilogramos: ${pesoKg} kg`);
console.log(`En libras: ${conversion} lb `);