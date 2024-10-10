const prompt = require("prompt-sync")({sigint: true});

let condicion1= prompt("Ingrese una condicion : true | false");
let condicion2= prompt("Ingrese otra condicion : true | false");

console.log(`Condicion 1 AND condicion 2: ${condicion1 && condicion2}`);
console.log(`Condicion 1 OR condicion 2: ${condicion1|| condicion2} `);