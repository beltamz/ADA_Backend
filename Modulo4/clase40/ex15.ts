/*Ejercicio 15: Arrays multidimensionales
1. Declara un array multidimensional que represente una tabla de notas de 3
estudiantes. Cada subarray debe tener el nombre del estudiante y sus
notas en tres materias.
2. Añade los nombres "Maria", "Pedro" y "Luis", junto con sus respectivas
notas.
3. Imprime el nombre y las notas del segundo estudiante (Pedro).
4. Muestra la nota promedio de cada estudiante recorriendo el array. */

let alumnos : (string|number)[][]=[
    ["Maria", 10 , 5 , 7],
    ["Pedro", 9 , 9 , 4],
    ["Luis", 3 , 8 , 6 ]
];

console.log(alumnos[1]);

let acumulador: number=0;
let promedio: number=0;

for (let i = 0; i < alumnos.length; i++) {
    for (let j = 0; j < alumnos[i].length; j++){
        if (typeof alumnos[i][j] ==='number') {
            acumulador += alumnos[i][j] as number;
        };
    };
    
    promedio= acumulador/(alumnos[i].length-1);
    console.log(`Promedio de ${alumnos[i][0]} : ${promedio}`);  
            
    promedio=0;
    acumulador=0;
};