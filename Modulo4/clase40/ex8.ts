/*Ejercicio 8: Uso de métodos de arrays
1. Declara un array que contenga los nombres de 5 países.
2. Ordena el array en orden alfabético.
3. Usa un método para agregar otro país al inicio del array.
4. Elimina el último país del array.
5. Recorre el array y muestra cada país por consola */

let paises: string[]=["Dinamarca","Chile","España","Argentina","Bolivia"];

paises.sort();
paises.unshift("Guatemala");
paises.pop();

paises.forEach(pais=>{
    console.log(pais);
});