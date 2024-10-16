/*Ejercicio 11: Arrays y métodos de búsqueda
1. Declara un array de números del 1 al 10.
2. Usa un método para encontrar si el número 5 está presente en el array.
3. Encuentra el índice del número 8 en el array.
4. Invierte el orden de los números en el array.
5. Muestra el array final por consola. */

let arrayDeNumeros: number []=[1,2,3,4,5,6,7,8,9,10];

let estaCinco: boolean= arrayDeNumeros.includes(5);

if(estaCinco){
    console.log(`El numero 5 aparece en la lista`);
}else{
    console.log(`El numero 5 no aparece en la lista`); 
};

let indiceDeOcho:number = arrayDeNumeros.indexOf(8);

console.log(`El numero 8 se encuentra en la posicion ${indiceDeOcho}`);

arrayDeNumeros.reverse();

console.log(arrayDeNumeros);