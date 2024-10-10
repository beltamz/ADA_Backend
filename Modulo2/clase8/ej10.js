const prompt = require("prompt-sync")({sigint: true});

let numUsuario= parseInt(prompt("Ingrese un numero del 1 al 7:"));

if(numUsuario==1){
    console.log("El numero ingresado es el dia domingo");
}else if( numUsuario==2){
    console.log("El numero ingresado es el dia lunes");
}else if( numUsuario==3){
    console.log("El numero ingresado es el dia martes");
}else if(numUsuario==4){
    console.log("El numero ingresado es el dia miercoles");
}else if( numUsuario==5){
    console.log("El numero ingresado es el dia jueves");
}else if( numUsuario==6){
    console.log("El numero ingresado es el dia viernes");
}else if(numUsuario==7){
    console.log("El numero ingresado es el dia sabado");
}else{
    console.log("El numero ingresado no corresponde a ningun día");
}