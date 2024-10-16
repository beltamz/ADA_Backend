/*Ejercicio 13: Array de enums para estados del clima
1. Declara un enum llamado Clima con los valores: Soleado, Nublado,
Lluvioso, Tormentoso.
2. Crea un array que almacene una serie de estados del clima usando los
valores del enum.
3. Usa un ciclo para recorrer el array e imprime los valores del clima en cada
posición.
 */

enum Clima{
    Soleado,
    Nublado,
    Lluvioso,
    Tormentoso
};

let estadosDelClima: string[]=[Clima[1],Clima[0],Clima[3],Clima[1],Clima[2]];

for (let i = 0; i < estadosDelClima.length; i++){
    console.log(`${i+1}) Estado: ${estadosDelClima[i]}`);
};