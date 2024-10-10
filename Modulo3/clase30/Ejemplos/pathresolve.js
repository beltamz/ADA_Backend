const path = require('path');

//Ejemplo 1:  Resolucion de una ruta relativa desde el directorio actual
const resolvedPath1= path.resolve('file.txt');
console.log("Ejemplo 1: ", resolvedPath1);

//Ejemplo 2: Resolucion de multiples segmentos de ruta en una ruta absoluta
const resolvedPath2= path.resolve('/home/user', 'docs', 'file.txt');
console.log("Ejemplo 2: ", resolvedPath2);

//Ejemplo 3: Uso con rutas relativas que suben varios niveles
const resolvedPath3= path.resolve('/home/user/docs', '../images', 'file.png');
console.log("Ejemplo 3: ", resolvedPath3);
