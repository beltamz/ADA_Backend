const readLineSync = require('readline-sync');
const crypto= require('crypto');

let mensaje= readLineSync.question("Ingrese su mensaje:");
let nroHash= crypto.createHash('sha256');
nroHash.update(mensaje);
let hashOutput= nroHash.digest('hex');
console.log(`Su nro hash SHA-256: ${hashOutput}.`);