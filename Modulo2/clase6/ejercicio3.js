const prompt = require("prompt-sync")({sigint: true});

let numero1;
let numero2;
let suma; 
let resta;
let multiplicacion;
let division;
let eleccion;

numero1= parseFloat(prompt("Ingrese un numero:"));
numero2= parseFloat(prompt("Ingrese otro numero:"));

do {
    console.log("Elija una opcion:");
    console.log("1- Suma");
    console.log("2- Resta");
    console.log("3- Multiplicacion");
    console.log("4- Division");
    console.log("5- Salir");

    eleccion= parseFloat(prompt());

    if(eleccion==1){
        suma=numero1 + numero2;
        console.log("La suma es de: " + suma);
    }else if(eleccion==2){
        resta= numero1 - numero2;
        console.log("La resta es de: " + resta);
    }else if(eleccion==3){
        multiplicacion= numero1 * numero2;
        console.log("La multiplicacion es de: " + multiplicacion);
    }else if(eleccion==4){
        division= numero1 / numero2;
        console.log("La division es de: " + division );
    }else{
        console.log("Fin de la calculadora");
    }

} while (eleccion!=5);





