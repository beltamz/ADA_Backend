let num1 = 7;
let num2= 5;

//Funcion declarada
function resta(num1, num2){
    return console.log("La resta da: " + (num1 - num2));
}

//Funcion flecha
let sumar = (num1,num2) => console.log("La suma da: " + (num1 + num2)) ; 

//Funcion flecha + declarada ??
let division= (num1,num2) => {
    let resto= num1%num2;
    let resultado= num1/num2;
    return "La division da: " + resultado + ", dejando un resto de " + resto;
}

//Funcion expresada

let multi = function(num1, num2){
    console.log("La multiplicacion da: " + (num1*num2));
}

resta(num1, num2);
sumar(num1,num2);
division(num1, num2);
multi(num1,num2);