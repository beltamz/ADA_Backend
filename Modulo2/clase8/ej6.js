const prompt = require("prompt-sync")({sigint: true});

let edad= parseInt(prompt("Ingrese su edad: "));
const MAYOR_EDAD=18;

if(edad>=MAYOR_EDAD){
    console.log(`Usted tiene ${edad} años, es mayor de edad.`);
}else{
    console.log(`Usted tiene ${edad} años, no es mayor de edad`)
}