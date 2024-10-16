/*Ejercicio 14: Tuplas opcionales
1. Declara una tupla que almacene el nombre (string), la edad (número) y si
tiene licencia de conducir (opcional, booleano).
2. Inicializa la tupla con los valores "Carlos", 28.
3. Añade el valor true a la tupla indicando que tiene licencia.
4. Muestra la tupla actualizada por consola. */

let conductor : [string, number,boolean?];

conductor= ["Carlos", 28];

conductor[2]=true;

console.log(conductor);