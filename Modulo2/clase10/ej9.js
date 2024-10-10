/*Ejercicio 9:
En este ejercicio tienes un array ‘colores’ que contiene nombres de
diferentes colores. Tu tarea es realizar las siguientes operaciones:
✓ Imprimir todos los colores del array.
✓ Modificar el primer color del array a "blanco".
✓ Agregar dos nuevos colores al final del array: "negro" y "gris".*/

let colores = ["rojo", "verde", "azul", "amarillo"];

for(let i=0; i<4; i++){
    console.log( "Color " + (i+1) + " : " + colores[i]);
}

colores[0]= "blanco";
colores[4]= "negro";
colores[5]= "gris";
console.log("--------------------------");

for(let i=0; i<6; i++){
    console.log( "Color " + (i+1) + " : " + colores[i]);
}
