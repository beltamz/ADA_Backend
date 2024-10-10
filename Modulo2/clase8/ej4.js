const prompt = require("prompt-sync")({sigint: true});

let nombre= prompt("Ingrese su nombre: ");

if(nombre=="belen" || nombre=="Belen" || nombre=="BELEN"){
    console.log("Los nombres coinciden :) ");
}else{
    console.log("Los nombres no coinciden :( ");
}