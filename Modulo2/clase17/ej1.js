/*Ejercicio 1: Lugar y números
Para practicar la implementación del algoritmo de búsqueda binaria,
vamos a empezar con un ejemplo simple. Quiero que se familiaricen con
la sintaxis del mismo, por lo que no hare énfasis en los datos, sino en la
solución.
Dada la siguiente lista:
Utilizar el algoritmo de búsqueda binaria para responder los siguientes
ítems:
o ¿Cuál es la posición del número 1?
o ¿Cuál es la posición del número 5?
o ¿Cuál es la posición del número 6?
o ¿Cuál es la posición del número 9?
o ¿Cuál es la posición del número 11?
Sabemos que responder estas preguntas es extremadamente fácil, ya
que podemos leer el array, y determinar con un cálculo visual la posición
de cada elemento, pero, la propuesta que les hago es que codeen un
algoritmo de búsqueda binaria, que “busque” ese número, por ejemplo, el
6, y nos indique por consola la posición del mismo.
El objetivo de este ejercicio es que puedan practicar la sintaxis sin añadir
complejidad extra. */

function busquedaBinaria(lista, numero) {
    let min=0;
    let max=lista.length-1;
    let mitad=0;
    let resultado=0;

    while(min<=max){
        mitad=Math.floor((min+max)/2);
        resultado=lista[mitad];    
        
        if (numero==resultado) {
            console.log(`El numero ${numero} aparece en la posición ${mitad}`);
            break;       
        }else if(numero>resultado){
            min= mitad+1;
        }else if(numero<resultado){
            max=mitad-1;
        }else{
            console.log("El numero " + numero + " no está en el arreglo");
        }
    }
}

let list=[1,2,3,4,5,6,7,8,9,10,11];
let num1=1;
let num2=5;
let num3= 6;
let num4=9;
let num5=11;

busquedaBinaria(list,num1);
busquedaBinaria(list,num2);
busquedaBinaria(list,num3);
busquedaBinaria(list,num4);
busquedaBinaria(list,num5);

