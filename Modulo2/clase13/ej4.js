/*• Ejercicio 4: Numero pares
Escribí un programa que imprima los números pares del 0 al 100. No es
necesario pedirle al usuario, solo imprimir el resultado. Agreguen los
números pares a un array.
Pista: Usa un ciclo */

const prompt = require("prompt-sync")({sigint: true});
let numPares= [];
let j=0;
for (let i = 0; i <= 100; i++){
        if(i%2==0){
           numPares[j]=i;
           j++;
        }
}

for (let i = 0; i < numPares.length; i++) {
    console.log(numPares[i]);
}

