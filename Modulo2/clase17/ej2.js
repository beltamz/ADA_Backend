/*Ejercicio 2: Desafío extra! Orden, lugar y números
Al ejercicio anterior vamos a aumentarle la dificultad un poco, y de paso,
aplicamos lo aprendido en semanas anteriores. Quiero que hagan lo
mismo del ejercicio anterior (buscar la posición de un número en un
array), pero partiendo de esta lista:
Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor
a mayor, utilizando bubble sort. Luego, respondan las siguientes
preguntas:
o ¿Cuál es la posición del número 12?
o ¿Cuál es la posición del número 5?
o ¿Cuál es la posición del número 22?
o ¿Cuál es la posición del número 100? */

let list= [12,3,5,7,1,22,47,100];
let num1=12;
let num2=5;
let num3=22;
let num4=100;

sortingArray(list);
searchingNumber(list,num1);
searchingNumber(list,num2);
searchingNumber(list,num3);
searchingNumber(list,num4);

function sortingArray(list) {
    let aux;

    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length-1; j++) {
            if(list[j]>list[j+1]){
                aux=list[j+1];
                list[j+1]=list[j];
                list[j]=aux;
            }
        }
    }
}

function searchingNumber(list, num) {
    let start=0;
    let end=list.length-1;
    let middle=0;
    let result;

    while(start<=end){
        middle=Math.floor((start+end)/2);
        result=list[middle];

        if(result==num){
            console.log("El numero " + num + " esta en la posición " + middle + ".");
            break;
        }else if(num<result){
            end=middle-1;
        }else if(num>result){
            start=middle+1;
        }else{
            console.log("El numero " + num + " no se encuentra en el array");
        }
    }
}

